import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";



function MoviesCard(movie) {
    const { pathname } = useLocation();

    return (
        <article className="movies-card">
        <img src={movie.image} alt={movie.nameRu} className="movies-card__image" />

        {/* <button className="movies-card__save button" type="button">Сохранить</button> */}

        <button className={`button movies-card__save ${pathname !== "/saved-movies" ? "" : "movies-card__delete"}`} type="button"></button>
        <div className="movies-card__container">
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <p className="movies-card__duration">{movie.duration}</p>
        </div>
         </article >
    );
  }
  
  export default MoviesCard;