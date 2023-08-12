import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          <li className="footer__list">
          <a
            href="https://practicum.yandex.ru/"
            className="link footer__link"
            target="_blank"
            rel="noreferrer"
          >Яндекс.Практикум</a>
        </li>
        <li className="footer__list">
          <a
            href="https://github.com/"
            className="link footer__link"
            target="_blank"
            rel="noreferrer"
          >GitHub</a>
        </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
