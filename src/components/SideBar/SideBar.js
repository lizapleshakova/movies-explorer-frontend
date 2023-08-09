import React from "react";
import "./SideBar.css";
import { closeBtn } from "../../images/close_btn.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar({ onClick }) {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
     
        <button className="sidebar__close button" onClick={onClick}>
          <img src={closeBtn} className="sidebar__close-btn" alt="Закрыть" />
        </button>
        <nav className="sidebar__navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link sidebar__link ${isActive ? "sidebar__link_active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `link sidebar__link ${isActive ? "sidebar__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `link sidebar__link ${isActive ? "sidebar__link_active" : ""}`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link className="sidebar__link-profile link" to={"/profile"}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
