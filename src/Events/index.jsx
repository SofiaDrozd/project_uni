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
          <a href="/" className="nav-link">Головна</a>
          <Link to="/rooms" className="nav-link">Кімнати</Link>
          <Link to="/#about" className="nav-link">Про нас</Link>
          <Link to="/events" className="nav-link-active">Заходи</Link>
        </nav>
        <div className="headerLinks">
          <Link className="account" to='/account'>
            Акаунт
          </Link>
        </div>
      </header>
      <main className="main">
        


        <div className="rooms">
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
      </main>
      <footer className="footer">
        <div className="footerLogo">TableCrew</div>
        <nav className="navLinks down">
          <Link to="/" className="footer-nav-link">Головна</Link>
          <Link to="/rooms" className="footer-nav-link">Кімнати</Link>
          <Link to="/#about" className="footer-nav-link">Про нас</Link>
          <Link to="/events" className="footer-nav-link-active">Заходи</Link>
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
