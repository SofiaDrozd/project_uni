import React from "react";
import "./index.css";
import photo from "./headerPhoto.png";
import aboutUs1 from "./aboutUs1.png";
import aboutUs2 from "./aboutUs2.png";

const Main = () => {
  return (
    <>
      <header className="header">
        <div className="logo">TableCrew</div>
        <div className="headerLinks">
          <a className="registr" href="#">
            Реєстрація
          </a>
          <a className="logIn" href="#">
            Вхід
          </a>
        </div>
      </header>
      <main className="main">
        <img src={photo} alt="photoHeader" className="photoHeader" />
        <div className="overlowText">
          <div className="found">Знайди своїх </div>
          <div className="subdue">підкорюй світ гри!</div>
          <button className="buttonJoin">Приєднатись</button>
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
    </>
  );
};

export default Main;
