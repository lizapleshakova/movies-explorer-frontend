import React from "react";
import { Link } from "react-router-dom";
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
            <Link
              to="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__link link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__list">
            <Link
              to="https://github.com/"
              target="_blank"
              className="footer__link link"
            >
              GitHub
            </Link>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
