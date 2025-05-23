import React from "react";
import "./index.css";
import photoUser from "./userPhoto.png";

const Account = () => {
  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <nav className="navLinks">
          <a href="#" className="nav-link">
            Головна
          </a>
          <a href="#" className="nav-link">
            Кімнати
          </a>
          <a href="#" className="nav-link">
            Про нас
          </a>
          <a href="#" className="nav-link">
            Заходи
          </a>
        </nav>
        <div className="headerLinks">
          <a className="account" href="#">
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
    </>
  );
};

export default Account;
