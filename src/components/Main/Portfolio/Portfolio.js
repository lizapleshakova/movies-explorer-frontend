import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            href="https://lizapleshakova.github.io/how-to-learn"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__link">
              <p className="portfolio__link-name">Статичный сайт</p>
              <img src={arrow} className="portfolio__link-arrow" alt="стрелка"/>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://lizapleshakova.github.io/russian-travel"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__link">
              <p className="portfolio__link-name">Адаптивный сайт</p>
              <img src={arrow} className="portfolio__link-arrow" alt="стрелка"/>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://lizapleshakova.github.io/mesto-react"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__link portfolio__link-last">
              <p className="portfolio__link-name">Одностраничное приложение</p>
              <img src={arrow} className="portfolio__link-arrow" alt="стрелка"/>
            </div>
          </a>
        </li>
     
      </ul>
    </section>
  );
}

export default Portfolio;
