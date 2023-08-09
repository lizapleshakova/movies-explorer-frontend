import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { useLocation } from "react-router-dom";

function MoviesCardList({ movies }) {
  // const { pathname } = useLocation();
  return (
    <section className="movies-cardlist">
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

      <button type="button" className="button movies-cardlist__more-btn">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
