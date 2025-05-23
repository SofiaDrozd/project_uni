import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Registation = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <i className="fa-solid fa-arrow-left arrow" onClick={goBack}></i>
      <div className="register-wrapper">
        <div className="registrPhrase">Реєстрація</div>
        <form className="register-form">
          <input type="text" placeholder="Ім’я" name="name" required />
          <input type="number" placeholder="Вік" name="age" required></input>
          <input
            type="tel"
            placeholder="Номер телефону"
            name="phone"
            pattern="[0-9]{10}"
            required
          ></input>
          <input type="email" placeholder="E-mail" name="email" required />
          <input type="text" placeholder="Місто" name="sity" required></input>
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Підтвердження паролю"
            name="repeatPassword"
            required
          />
          <button type="submit" className="registrButton">
            Зареєструватись
          </button>
        </form>
      </div>
    </>
  );
};

export default Registation;
