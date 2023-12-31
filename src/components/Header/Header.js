import React, { useState } from "react";
import headerLogo from "../../images/headerLogo.svg";
import sidebarBtn from "../../images/sidebar_btn.svg";
import closeBtn from "../../images/close_btn.svg";
import "./Header.css";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";


function Header({ loggedIn }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleButtonClick = () => setSideBarOpen(!isSideBarOpen);

  const handleSideBarClick = () => {
    setSideBarOpen(false);
  };

  return (
    <header className="header">
      {!loggedIn ? (
        <div className="header__container">
          <Link to="/" className="link header__link">
            <img src={headerLogo} alt="Логотип" className="header__logo" />
          </Link>
          <nav className="header__user-links">
            <Link to="/signup" className="link header__link-signup">
              Регистрация
            </Link>
            <Link to="/signin" className="link header__link-signin">
              Войти
            </Link>
          </nav>
        </div>
      ) : (
        <div className="header__container">
          <nav className="header__movies">
            <Link to="/" className="link header__link">
              <img src={headerLogo} alt="Логотип" className="header__logo" />
            </Link>
            <div className="header__islogged">
              <nav className="header__navigation">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `link header__navigation-movies ${
                      isActive ? "header__navigation-movies_active" : ""
                    }`
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `link header__navigation-movies ${
                      isActive ? "header__navigation-movies_active" : ""
                    }`
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </nav>
            </div>
            <Link className="header__navigation-profile link" to={"/profile"}>
              Аккаунт
            </Link>
          </nav>

          <div className="sidebar">
            <div
              className={`sidebar__button-open button ${
                isSideBarOpen ? "sidebar__button_active" : ""
              }`}
              onClick={handleButtonClick}
            >
              <img
                src={sidebarBtn}
                className="sidebar__button"
                alt="Открыть меню"
              />
            </div>

            <div
              className={`sidebar__container ${
                isSideBarOpen ? "sidebar__container_active" : ""
              }`}
            >
              <div
                className="sidebar__button-close button"
                onClick={handleSideBarClick}
              >
                <img src={closeBtn} alt="Закрыть" />
              </div>
              {/* ссылки */}
              <nav className="sidebar__navigation">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `link sidebar__link ${
                      isActive ? "sidebar__link_active" : ""
                    }`
                  }
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `link sidebar__link ${
                      isActive ? "sidebar__link_active" : ""
                    }`
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `link sidebar__link ${
                      isActive ? "sidebar__link_active" : ""
                    }`
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
        </div>
      )}
    </header>
  );
}

export default Header;
