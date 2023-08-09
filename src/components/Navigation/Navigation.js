import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__link">
          <Link className="navigation__link link" to={"/movies"}>
            Фильмы
          </Link>
        </li>
        <li className="navigation__link">
          <Link className="navigation__link link" to={"/saved-movies"}>
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation