import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import photoUser from "./userPhoto.png";

const Account = () => {
  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <nav className="navLinks">
          <Link to="/" className="nav-link">
            Головна
          </Link>
          <Link to="/rooms" className="nav-link">
            Кімнати
          </Link>
          <Link to="/#about" className="nav-link">Про нас</Link>
          <Link to="/events" className="nav-link">Заходи</Link>
        </nav>
        <div className="headerLinks">
          <a className="account-active" href="#">
            Акаунт
          </a>
        </div>
      </header>
      <div className="accountUser">
        <div className="userCard">Картка гравця</div>
        <img src={photoUser} alt="userPhoto" className="userPhoto"></img>

        <table>
          <tr>
            <td>Ім’я</td>
            <td>Іван Петренко</td>
          </tr>
          <tr>
            <td>Вік</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Номер телефону</td>
            <td>+380991234567</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>petrenko22@gmail.com</td>
          </tr>
          <tr>
            <td>Місто</td>
            <td>Чернівці</td>
          </tr>
          <tr>
            <td>Відвідано заходів</td>
            <td>3</td>
          </tr>
        </table>
        <button className="userLogoutBtn">Вийти</button>
      </div>

      <footer className="footer">
        <div className="footerLogo">TableCrew</div>
        <nav className="navLinks down">
          <Link to="/" className="footer-nav-link">Головна</Link>
          <Link to="/rooms" className="footer-nav-link">Кімнати</Link>
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
    </>
  );
};

export default Account;
