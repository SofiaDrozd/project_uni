const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// Налаштування статичної папки для віддачі файлів
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Налаштування multer для обробки завантаження файлів
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Підключення до бази даних SQLite
const db = new sqlite3.Database('boardgames.db');

// Створення таблиць
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user',
    photoPath TEXT,
    name TEXT,
    age INTEGER,
    phoneNumber TEXT,
    city TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    photoPath TEXT,
    title TEXT,
    city TEXT,
    dateTime TEXT,
    location TEXT,
    places INTEGER,
    description TEXT,
    price REAL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    gameId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id),
    FOREIGN KEY(gameId) REFERENCES games(id)
  )`);
});

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

// Middleware для перевірки JWT-токена
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Токен відсутній' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Невірний токен' });
    req.user = user;
    next();
  });
};

// Middleware для перевірки ролі адміністратора
const checkAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Доступ заборонено. Потрібна роль адміністратора' });
  }
  next();
};

// Реєстрація користувача (без authenticateToken)
app.post('/api/register', upload.single('photo'), async (req, res) => {
  const { username, name, email, password, age, phoneNumber, city, confirmPassword } = req.body;
  if (!username || !email || !password || !phoneNumber || !city) {
    return res.status(400).json({ error: 'Усі поля обов’язкові' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Паролі не збігаються' });
  }

  try {
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; // Змінено на відносний шлях
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run(
      'INSERT INTO users (username, name, email, password, photoPath, age, phoneNumber, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [username, name, email, hashedPassword, photoPath, age || null, phoneNumber, city],
      function (err) {
        if (err) {
          const errorMessage = err.message.includes('email') ? 'Email вже існує' : 'Username вже існує';
          return res.status(400).json({ error: `Користувач із таким ${errorMessage} вже існує` });
        }
        const token = jwt.sign({ id: this.lastID, username, role: 'user' }, SECRET_KEY);
        res.json({ user: { id: this.lastID, username, name, age: age || null, phoneNumber, city, email, photoPath }, token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

// Авторизація користувача
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Усі поля обов’язкові' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Невірний email або пароль' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Невірний email або пароль' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role || 'user' }, SECRET_KEY);
    res.json({ 
      user: { 
        id: user.id, 
        username: user.username, 
        name: user.name, 
        age: user.age, 
        phoneNumber: user.phoneNumber, 
        city: user.city, 
        email: user.email, 
        photoPath: user.photoPath 
      }, 
      token,
      role: user.role || 'user'
    });
  });
});

// Перегляд ігор із фільтрацією (Кімнати)
app.get('/api/games', (req, res) => {
  const { city, date } = req.query;
  let query = 'SELECT * FROM games';
  const params = [];

  if (city || date) {
    query += ' WHERE';
    if (city) {
      query += ' city = ?';
      params.push(city);
    }
    if (city && date) query += ' AND';
    if (date) {
      query += ' dateTime LIKE ?';
      params.push(`${date}%`);
    }
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Помилка сервера' });
    }
    res.json(rows);
  });
});

// Створення нової гри (тільки для адміністраторів)
app.post('/api/games', authenticateToken, checkAdmin, upload.single('photo'), (req, res) => {
  const { title, city, dateTime, location, places, description, price } = req.body;
  console.log('Отримані дані:', { title, city, dateTime, location, places, description, price });

  if (!title || !city || !dateTime || !location || !places || !description || !price) {
    return res.status(400).json({ error: 'Усі поля обов’язкові' });
  }

  try {
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; // Змінено на відносний шлях
    const placesInt = parseInt(places, 10);
    const priceFloat = parseFloat(price);

    if (isNaN(placesInt) || placesInt <= 0) {
      return res.status(400).json({ error: 'Кількість місць повинна бути додатним числом' });
    }
    if (isNaN(priceFloat) || priceFloat < 0) {
      return res.status(400).json({ error: 'Ціна повинна бути невід’ємним числом' });
    }

    db.run(
      'INSERT INTO games (photoPath, title, city, dateTime, location, places, description, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [photoPath, title, city, dateTime, location, placesInt, description, priceFloat],
      function (err) {
        if (err) {
          console.error('Помилка SQL:', err.message);
          return res.status(500).json({ error: 'Помилка сервера: ' + err.message });
        }
        res.json({ success: true, gameId: this.lastID });
      }
    );
  } catch (error) {
    console.error('Загальна помилка:', error.message);
    res.status(500).json({ error: 'Помилка сервера: ' + error.message });
  }
});

// Запис на гру
app.post('/api/register-game', authenticateToken, (req, res) => {
  const { gameId } = req.body;
  const userId = req.user.id;

  if (!gameId) {
    return res.status(400).json({ error: 'gameId обов’язковий' });
  }

  db.get(
    'SELECT * FROM registrations WHERE userId = ? AND gameId = ?',
    [userId, gameId],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Помилка сервера' });
      }
      if (row) {
        return res.status(400).json({ error: 'Ви вже записані на цю гру' });
      }

      db.run(
        'INSERT INTO registrations (userId, gameId) VALUES (?, ?)',
        [userId, gameId],
        function (err) {
          if (err) {
            return res.status(400).json({ error: 'Помилка запису' });
          }
          res.json({ success: true });
        }
      );
    }
  );
});

// Перегляд ігор, на які записаний користувач
app.get('/api/my-games', authenticateToken, (req, res) => {
  const userId = req.user.id;
  db.all(
    `SELECT games.* FROM games
     JOIN registrations ON games.id = registrations.gameId
     WHERE registrations.userId = ?`,
    [userId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Помилка сервера' });
      }
      res.json(rows);
    }
  );
});

// Завантаження фото профілю
app.post('/api/upload-photo', authenticateToken, upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Фото не завантажено' });
  }

  const photoPath = `/uploads/${req.file.filename}`; // Змінено на відносний шлях
  const userId = req.user.id;

  db.run(
    'UPDATE users SET photoPath = ? WHERE id = ?',
    [photoPath, userId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Помилка оновлення фото' });
      }
      res.json({ success: true, photoPath });
    }
  );
});

// Отримання фото профілю
app.get('/api/get-photo', authenticateToken, (req, res) => {
  const userId = req.user.id;
  db.get('SELECT photoPath FROM users WHERE id = ?', [userId], (err, row) => {
    if (err || !row || !row.photoPath) {
      return res.status(404).json({ error: 'Фото не знайдено' });
    }
    res.sendFile(path.resolve(row.photoPath));
  });
});

// Глобальний обробник помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Щось пішло не так!' });
});

// Закриття бази даних при завершенні сервера
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Помилка при закритті бази даних:', err.message);
    } else {
      console.log('База даних закрита.');
    }
    process.exit();
  });
});

// Запуск сервера на порті 3001
app.listen(3001, () => console.log('Server running on port 3001'));