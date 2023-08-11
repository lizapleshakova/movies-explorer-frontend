import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies }) {
  const { pathname } = useLocation();
  return (
    <section 
    className={`${
      pathname !== "/saved-movies" ? "movies-cardlist" : "saved-movies-cardlist"
      
    }`}>
    
      <div className="movies-cardlist__container">
        {movies.map((movie) => {
          return (
            <MoviesCard
              image={movie.image}
              nameRU={movie.nameRU}
              duration={movie.duration}
            />
          );
        })}
      </div>
    
        <button
          className={`button movies-cardlist__more-btn ${
            pathname !== "/saved-movies" ? "" : "movies-cardlist__more-btn_none"
          }`}
          type="button"
        >
          Ещё
        </button>
     
    </section>
  );
}

export default MoviesCardList;
