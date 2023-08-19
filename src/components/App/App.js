import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/mainApi";
import movieApi from "../../utils/movieApi";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";

import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ data: {} });

  const [loggedIn, setLoggedIn] = useState(false); //хранение состояния авторизации

  const locationWithHeader =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  // хранение состояния открытия попапа успеха или ошибки регистрации
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [statusTooltip, setStatusTooltip] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка получения данных: ${err}`));
    }
  }, [loggedIn]);

  // Функция закрытия попапа
  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  // Регистрация
  function handleRegistrate(name, email, password) {
    api
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setStatusTooltip(true);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных: ${err}`);
        setStatusTooltip(false);
      })
      .finally(() => {
        setInfoTooltipPopupOpen(true);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => console.log(`Ошибка получения данных: ${err}`));
    }
  }, []);

  function handleLogin(email, password) {
    api
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });

        }
      })
      .catch((err) => console.log(`Ошибка получения данных: ${err}`));
  }

  function handleUpdateUser(name, email) {
    api
      .setProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        // setInfoTooltipPopupOpen(true);
        // setStatusTooltip(true);
      })
      .catch((err) => console.log(`Ошибка получения данных: ${err}`));
  }

  function onSignOut() {
    localStorage.removeItem("token");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.clear();
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {locationWithHeader && <Header loggedIn={loggedIn} />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} loggedIn={loggedIn} />
            <Route
              path="/saved-movies"
              element={<SavedMovies />}
              loggedIn={loggedIn}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Register onRegister={handleRegistrate} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  loggedIn={loggedIn}
                  onSignOut={onSignOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />
          </Routes>
        </div>
        <InfoTooltip
          name="info"
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          isSuccess={statusTooltip}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
