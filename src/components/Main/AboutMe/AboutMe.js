import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../../images/pic__COLOR_pic.jpg";


function AboutMe() {
    return (
      <section className="about-me" id="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
            <div className="about-me__container">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
            <a className="about-me__githublink link" href="https://github.com/lizapleshakova" target="_blank" rel="noreferrer">Github</a>
            </div>
            <img className="about-me__photo" src={studentPhoto} alt="Фото студента"/>
        </div>
        
    
      </section>
    );
  }
  
  export default AboutMe;