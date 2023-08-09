import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
      <section className="about-project" id="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
            <h3 className="about-project__undertitle">Дипломный проект включал 5 этапов</h3>
            <h3 className="about-project__undertitle about-project__undertitle_type_last">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className="about-project__text about-project__text_type-last">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__scale">
            <h3 className="about-project__scale-title">1 неделя</h3>
            <h3 className="about-project__scale-title">4 недели</h3>
            <p className="about-project__scale-text">Back-end</p>
            <p className="about-project__scale-text">Front-end</p>
        </div>
        
    
      </section>
    );
  }
  
  export default AboutProject;