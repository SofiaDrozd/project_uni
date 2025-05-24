import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import monopolyImg from "../assets/img/image3.png";
import starImg from "../assets/img/star.svg";

const Rooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isModalOpen]);

  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <nav className="navLinks">
          <Link to="/" className="nav-link">
            Головна
          </Link>
          <Link to="/rooms" className="nav-link-active">
            Кімнати
          </Link>
          <Link to="/#about" className="nav-link">
            Про нас
          </Link>
          <Link to="/events" className="nav-link">
            Заходи
          </Link>
        </nav>
        <div className="headerLinks">
          <Link className="account" to="/account">
            Акаунт
          </Link>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <select className="containerSelect">
            <option>Виберіть місто</option>
            <option>Київ</option>
            <option>Львів</option>
            <option>Одеса</option>
          </select>
          <input type="text" placeholder="Знайти за датою" className="containerInput" />
          <button className="containerButton">&times;</button>
        </div>

        <div className="rooms">
          <div className="grid">

            <div className="card" onClick={() => openModal({
            })}>
            
              <div className="top-right">
                <img src={starImg} alt="Зірка" />
              </div>
              <img src={monopolyImg} alt="Монополія" />
              <div className="card-content">
                <div className="bottom-left">
                  <p className="text">Місця: 24 шт</p>
                  <p className="cost">Ціна: 200 грн</p>
                </div>
                <div className="bottom-right">
                  <p className="text">Дата: 19 жовтня</p>
                  <p className="text">Початок: 17:00</p>
                </div>
                <div className="top-left">
                  <p className="size">Монополія</p>
                  <p className="text">Чернівці</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footerLogo">TableCrew</div>
        <nav className="navLinks down">
          <Link to="/" className="footer-nav-link">Головна</Link>
          <Link to="/rooms" className="footer-nav-link-active">Кімнати</Link>
          <Link to="/#about" className="footer-nav-link">Про нас</Link>
          <Link to="/events" className="footer-nav-link">Заходи</Link>
        </nav>
        <div className="allConnection">
          <div className="contacts">
            <div>tablecrew@gmail.com</div>
            <div>+380xxxxxxx</div>
          </div>
          <div className="socialNet">
            <i className="fa-brands fa-telegram telegram"></i>
            <i className="fa-brands fa-instagram instagram"></i>
            <i className="fa-brands fa-facebook facebook"></i>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-topcard">
              <div className="modal_top-right">
                <img src={starImg} alt="Зірка" />
              </div>
              <img src={monopolyImg} alt="Монополія" className="card-img" />
              <div className="card-content">
                <div className="bottom-left">
                  <p className="modal-text">Місця: 24 шт</p>
                </div>
                <div className="bottom-right modal_right">
                  <p className="modal-text">Дата: 19 жовтня</p>
                  <p className="modal-text">Місце проведення: вул. Миру 18б</p>
                  <p className="modal-text">Початок: 17:00</p>
                </div>
                <div className="top-left">
                  <p className="modal-size">Монополія</p>
                  <p className="modal-text">Чернівці</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="modal-exs">
              <div className="modal-name">Гра &quot;монополія&quot;</div>
              <div className="modal__game">
                Монополія — це класична економічна настільна гра, яка перетворює
                тебе на справжнього магната! Мета гри — купувати, будувати та
                збагачуватись, поступово зводячи суперників до банкрутства.
                <br />
                🔑 Що на тебе чекає?
                <br />
                Купівля нерухомості: стань власником вулиць, залізниць і
                комунальних підприємств.
                <br />
                Будівництво: зводь будинки та готелі, щоб підвищити орендну
                плату.
                <br />
                Торги й угоди: домовляйся з іншими гравцями, укладай вигідні
                угоди.
                <br />
                Несподіванки: картки «Шанс» і «Скриня громади» можуть як
                допомогти, так і завадити.
                <br />
                👥 Кількість гравців: 2–6  <br />
                ⏱ Тривалість гри: 1–2 години  <br />
                📈 Вік: від 8 років
                <br />
                Монополія — це гра про стратегію, удачу та вміння вести
                переговори. Ідеально підходить для вечора з друзями або родиною.
                Випробуй себе у світі великих грошей!
              </div>
              <div className="modal_cost">Ціна: 200 грн</div>
              <button className="modal-button" onClick={() => setIsModalOpen(false)}>Підтверидити запис</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rooms;
