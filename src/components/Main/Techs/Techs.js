import React from "react";
import "./Techs.css";

function Techs() {
    return (
      <section className="techs" id="techs">
        <h2 className="techs__title">Технологии</h2>
        <h2 className="techs__subtitle">7&nbsp;технологий</h2>
        <p className="techs__description">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <ul className="techs__list">
            <li className="techs__chunk">HTML</li>
            <li className="techs__chunk">CSS</li>
            <li className="techs__chunk">JS</li>
            <li className="techs__chunk">React</li>
            <li className="techs__chunk">Git</li>
            <li className="techs__chunk">Express.js</li>
            <li className="techs__chunk">mongoDB</li>
        </ul>
      </section>
    );
  }
  
  export default Techs;