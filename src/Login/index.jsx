import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <i className="fa-solid fa-arrow-left arrow" onClick={goBack}></i>
      <div className="login-wrapper">
        <div className="loginPhrase">Вхід</div>
        <form className="login-form">
          <input type="email" placeholder="E-mail" name="email" required />
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />

          <button type="submit" className="loginButton">
            Увійти
          </button>
        </form>
      </div>
      <Link className="noAccount" to="/registration">
        Немає акаунту?
      </Link>
    </>
  );
};

export default Login;
