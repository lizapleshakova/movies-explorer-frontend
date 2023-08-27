import React, { useEffect, useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";

import Preloader from "../Preloader/Preloader";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { SEARCH_ERRORS, SHORT_FILM_DURATION } from "../../utils/constatns";

const SavedMovies = ({ movies, handleDeleteMovies, sevedMoviesArr, handleSavedMovieDelete }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShorts, setFilteredShorts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // сброс ошибок

  const handleFilteredShorts = (isChecked) => {

    setFilteredShorts(isChecked);
    localStorage.setItem("filteredShorts", JSON.stringify(isChecked));
  };

  const handleSearchQuery = (text) => {
    setSearchQuery(text);
  };

  const applyFilters = (movies, filteredShorts, searchQuery) => {
    let filteredMovieList = [...movies];

    if (filteredShorts) {
      filteredMovieList = filteredMovieList.filter(
        (movie) => movie.duration <= SHORT_FILM_DURATION
      );
    }

    if (searchQuery) {
      filteredMovieList = filteredMovieList.filter((movie) =>
        [movie.nameRU, movie.nameEN].some((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    return filteredMovieList;
  };

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    const filteredMovies = applyFilters(movies, filteredShorts, searchQuery);

    setFilteredMovies(filteredMovies);
    setIsLoading(false);
  }, [filteredShorts, searchQuery, movies]);

  return (
    <>
      <main className="content">
        <SearchForm
          handleMovies={handleSearchQuery}
          searchQuery={searchQuery}
          handleFilteredShorts={handleFilteredShorts}
          filteredShorts={filteredShorts}
        />
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p className="movies-cardlist__error">
            {SEARCH_ERRORS.SEARCH_SERVER_ERROR}
          </p>
        ) : filteredMovies.length === 0 ? (
          <p className="movies-cardlist__error">{SEARCH_ERRORS.NTH_FOUND}</p>
        ) : (
          <MoviesCardList
            cards={filteredMovies}
            handleDeleteMovies={handleDeleteMovies}
            sevedMoviesArr={sevedMoviesArr}
            handleSavedMovieDelete={handleSavedMovieDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
