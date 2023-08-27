import React from "react";
import { Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/mainApi";

import Succses from "../../images/succses.png";
import Fail from "../../images/fail.png";

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

// ОШИБКИ И СООБЩЕНИЯ
import {
  SUCCSES_MESSAGES,
  CONFLICT_ERROR,
  UPDATE_PROFILE_ERRORS,
  UNAUTH_ERROR,
  LOGIN_ERRORS,
  REGISTER_ERRORS,
} from "../../utils/constatns";

function App() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ data: {} });

  const [loggedIn, setLoggedIn] = useState(false); //хранение состояния авторизации
  const [movies, setMovies] = useState([]);

  // Удаление
  const handleSavedMovieDelete = (movieId) => {
    api
      .deleteMovie(movieId)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie._id !== movieId)
        );
      })
      .catch((err) => console.log(`Ошибка получения данных: ${err}`));
  };

  const handleDeleteMovies = (movie) => {
    const savedMovie = movies.find((card) => card.id === movie.id);
    // if (savedMovie) {
      handleSavedMovieDelete(savedMovie._id);
    // }
  };

  const handleAddMovie = (movie) => {
    api
      .createMovies(movie)
      .then((newMovie) => {
        setMovies([newMovie, ...movies]);
      })
      .catch((err) => console.log(`Ошибка получения данных: ${err}`));
  };

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMoviesInfo()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setMovies(movies);
        })
        .catch((err) => console.log(`Ошибка получения данных: ${err}`));
    }
  }, [loggedIn]);

  const locationWithHeader =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  // хранение состояния открытия попапа успеха или ошибки регистрации
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [statusTooltip, setStatusTooltip] = useState({
    image: "",
    message: "",
  });

  // Функция закрытия попапа
  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  // Закрытие по ESC и overlay
  const isOpen = isInfoTooltipPopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    function closeByOverlay(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      document.addEventListener("mousedown", closeByOverlay);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
        document.removeEventListener("mousedown", closeByOverlay);
      };
    }
  }, [isOpen]);

  // Регистрация
  function handleRegistrate(name, email, password) {
    api
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setInfoTooltipPopupOpen(true);
        setStatusTooltip({
          image: Succses,
          message: SUCCSES_MESSAGES.LOGIN_SUCCSES,
        });
      })
      .catch((err) => {
        if (err === CONFLICT_ERROR) {
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: REGISTER_ERRORS.DUPL_REGISTER_ERROR,
          });
        } else {
          console.log(`Ошибка получения данных: ${err}`);
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: REGISTER_ERRORS.REGISTRATE_ERROR,
          });
        }
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          navigate(pathname);
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
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Succses,
            message: SUCCSES_MESSAGES.LOGIN_SUCCSES,
          });
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err === UNAUTH_ERROR) {
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: LOGIN_ERRORS.INVALID_EMAIL_PASSW,
          });
        } else {
          console.log(`Ошибка получения данных: ${err}`);
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: LOGIN_ERRORS.INVALID_TOKEN,
          });
        }
      });
  }

  function handleUpdateUser(name, email) {
    api
      .setProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltipPopupOpen(true);
        setStatusTooltip({
          image: Succses,
          message: SUCCSES_MESSAGES.UPDATE_PROFILE_SUCCSES,
        });
      })
      .catch((err) => {
        if (err === CONFLICT_ERROR) {
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: UPDATE_PROFILE_ERRORS.DUPL_PROFILE_ERROR,
          });
        } else {
          console.log(`Ошибка получения данных: ${err}`);
          setInfoTooltipPopupOpen(true);
          setStatusTooltip({
            image: Fail,
            message: UPDATE_PROFILE_ERRORS.UPDATE_PROFILE_ERROR,
          });
        }
      });
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

            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={loggedIn}
                  sevedMoviesArr={movies}
                  handleAddMovie={handleAddMovie}
                  handleDeleteMovies={handleDeleteMovies}
                  handleSavedMovieDelete={handleSavedMovieDelete}
               
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  movies={movies}
                  sevedMoviesArr={movies}
                  handleDeleteMovies={handleDeleteMovies}
                  handleSavedMovieDelete={handleSavedMovieDelete}
                />
              }
            />

            <Route
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Login handleLogin={handleLogin}  />
                )
              }
            />

            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register onRegister={handleRegistrate} />
                )
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={loggedIn}
                  onSignOut={onSignOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          statusTooltip={statusTooltip}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
