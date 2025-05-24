import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import monopolyImg from '../assets/img/image3.png';
import starImg from '../assets/img/star.svg';
import photo from "../assets/img/headerPhoto.png";
import aboutUs1 from "../assets/img/aboutUs1.png";
import aboutUs2 from "../assets/img/aboutUs2.png";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <nav className="navLinks">
          <a href="#" className="nav-link">Головна</a>
          <Link to="/rooms" className="nav-link">Кімнати</Link>
          <a href="#" className="nav-link">Про нас</a>
          <a href="#" className="nav-link">Заходи</a>
        </nav>
        <div className="headerLinks">
          <Link className="account" to='/account'>
            Акаунт
          </Link>
        </div>
      </header>
      <main className="main">
        <img src={photo} alt="photoHeader" className="photoHeader" />
        <div className="overlowText">
          <div className="found">Знайди своїх </div>
          <div className="subdue">підкорюй світ гри!</div>
          <Link className="buttonJoin" to="/rooms">Приєднатись</Link>
        </div>


        <div className="aboutUs">
          <div className="phraseAbout">Кімнати</div>
          <div className="city-buttons">
            <button className="city-button active">Чернівці</button>
            <button className="city-button">Київ</button>
            <button className="city-button">Львів</button>
            <button className="city-button">Івано-Франківськ</button>
            <Link to="/rooms" className="city-link">Більше кімнат...</Link>
          </div>
          <div className="grid">
            <div className="card">
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

            <div className="card">
              <span className="top-right">
                <img src={starImg} alt="Зірка" />
              </span>
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

            <div className="card">
              <span className="top-right">
                <img src={starImg} alt="Зірка" />
              </span>
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

            <div className="card">
              <span className="top-right">
                <img src={starImg} alt="Зірка" />
              </span>
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



        <div className="aboutUs">
          <div className="phraseAbout">Про нас</div>
          <div className="aboutUsContainer1">
            <img src={aboutUs1} alt="aboutUs1"></img>
            <div>
              TableCrew — це простір, де люди зустрічаються, щоб грати,
              спілкуватися та створювати незабутні спогади за настільними
              іграми. Ми об’єднуємо новачків і досвідчених гравців, щоб разом
              підкорювати світ гри. Наша мета — створити дружню спільноту
              однодумців, де кожен може знайти компанію для гри, відпочити від
              буденності та відкрити для себе нові ігрові враження.
            </div>
          </div>
          <div className="aboutUsContainer2">
            <div>
              На нашому сайті ти можеш: знайти і приєднатися до ігрової
              зустрічі; створити власну подію; познайомитись із новими людьми,
              які поділяють твоє хобі. Ми підтримуємо різноманітні формати ігор:
              від класичних до сучасних стратегій, від кооперативних до змагань
              один на один. Знайди своїх — підкорюй світ гри! Ласкаво просимо до
              TableCrew — твого ігрового екіпажу!
            </div>
            <img src={aboutUs2} alt="aboutUs2"></img>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footerLogo">TableCrew</div>
        <nav className="navLinks down">
          <a href="#" className="nav-link nav-link--mod">Головна</a>
          <a href="#" className="nav-link nav-link--mod">Кімнати</a>
          <a href="#" className="nav-link nav-link--mod">Про нас</a>
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
      
    </>
  );
};

export default Home;
