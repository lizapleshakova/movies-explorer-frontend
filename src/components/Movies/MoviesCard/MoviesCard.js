import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { URL_MOVIE } from "../../../utils/constatns";

function MoviesCard({
  card,
  sevedMoviesArr,
  handleAddMovie,
  handleDeleteMovies,
  handleSavedMovieDelete
}) {
  const { pathname } = useLocation();
 
  const calculateDuration = (duration) => {
    const min = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч ${min}м`;
  };

  const savedMoviesID = sevedMoviesArr.map((movie) => movie.movieId);

  const isMovieSaved = () => savedMoviesID.includes(card.id);

  const saveBtnClassName = `button movies-card__save ${
    isMovieSaved() ? "button movies-card__saved" : ""
  }`;

  const movieToDelete = () => {
    const savedMovie = sevedMoviesArr.find((movie) => card.id === movie.movieId);
    handleSavedMovieDelete(savedMovie._id);
  };
 
  const handleToggleMovie = async () => {
    try {
      isMovieSaved() ? await movieToDelete() : await handleAddMovie(card);
    } catch (err) {
      console.log(`Ошибка получения данных: ${err}`);
    } 
  };

  const handleDeleteSavedMovie = () => {
    handleSavedMovieDelete(card._id);
    console.log(card);
  };

  return (
    <article className="movies-card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          src={
            pathname === "/movies"
              ? `${URL_MOVIE + card.image.url}`
              : card.image
          }
          alt={card.nameRU}
        />
      </a>

      {pathname === "/movies" && (
        <button
          className={saveBtnClassName}
          onClick={handleToggleMovie}
        ></button>
      )}
      {pathname === "/saved-movies" && (
        <button
          className="button movies-card__delete"
          onClick={handleDeleteSavedMovie}
        ></button>
      )}

      <div className="movies-card__container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__duration">
          {calculateDuration(card.duration)}
        </p>
      </div>
    </article>
  );
}

export default MoviesCard;
