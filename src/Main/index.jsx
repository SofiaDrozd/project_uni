import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import photo from "./headerPhoto.png";
import aboutUs1 from "../assets/img/aboutUs1.png";
import aboutUs2 from "../assets/img/aboutUs2.png";
import photoGame1 from "./photoGame1.png";
import photoGame2 from "./photoGame2.png";
import photoGame3 from "./photoGame3.png";
import Registation from "../Registration";

const Main = () => {
  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <div className="headerLinks">
          <Link className="registr" to="/registration">
            Реєстрація
          </Link>
          <Link className="logIn" to="/login">
            Вхід
          </Link>
        </div>
      </header>
      <main className="main">
        <img src={photo} alt="photoHeader" className="photoHeader" />
        <div className="overlowText">
          <div className="found">Знайди своїх </div>
          <div className="subdue">підкорюй світ гри!</div>
          <Link className="buttonJoin" to="/login">
            Приєднатись
          </Link>
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

        <div className="joinUs">
          <div>Реєструйся щоб поринути у світ гри разом з нами</div>
          <Link className="buttonJoin1" to="/login">
            Приєднатись
          </Link>
        </div>

        <div className="photoFromGames">
          <div className="photoGamesPhrase">Фото з заходів</div>
          <div className="allPhotoGames">
            <img src={photoGame1} alt="photoGame1" />
            <img src={photoGame2} alt="photoGame2" />
            <img src={photoGame3} alt="photoGame3" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footerLogo">TableCrew</div>
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

export default Main;
