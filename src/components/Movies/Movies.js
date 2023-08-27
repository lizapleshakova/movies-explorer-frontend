import React, { useEffect, useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

import movieApi from "../../utils/movieApi";
import { SEARCH_ERRORS, SHORT_FILM_DURATION } from "../../utils/constatns";

function Movies({
  handleAddMovie,
  sevedMoviesArr,
  handleSavedMovieDelete,
  handleDeleteMovies  
}) {
  const [cardList, setCardList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
   const [filteredShorts, setFilteredShorts] = useState(JSON.parse(localStorage.getItem("filteredShorts")));

  const [searchQuery, setSearchQuery] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAndUpdateMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const movieData = await movieApi.getMovies();
      setCardList(movieData);
      localStorage.setItem("movies", JSON.stringify(movieData));
    } catch (error) {
      setError(SEARCH_ERRORS.SEARCH_SERVER_ERROR);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMovies = (value) => {
    setSearchQuery(value);
    setSearchDone(true);
    localStorage.setItem("searchQuery", value);
  };

  const handleFilteredShorts = (isChecked) => {
    setFilteredShorts(isChecked);
    localStorage.setItem("filteredShorts", JSON.stringify(isChecked));
    
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    const savedSearchQuery = localStorage.getItem("searchQuery");
    

    if (savedMovies) {
      setCardList(JSON.parse(savedMovies));
      setIsLoading(false);
    } else {
      fetchAndUpdateMovies();
    }

    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);
      setSearchDone(true);
    }
  }, []);

  useEffect(() => {
    const filteredMovies = cardList.filter((card) => {
      const isMovieMatched = [card.nameRU, card.nameEN].some((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredShorts) {
        return isMovieMatched && card.duration <= SHORT_FILM_DURATION;
      } else {
        return isMovieMatched;
      }
    });
    setFilteredMovies(filteredMovies);

    if (searchDone) {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    }
  }, [searchQuery, cardList, filteredShorts, searchDone]);

  return (
    <>
      <main className="content">
        <SearchForm
          handleMovies={handleMovies}
          searchQuery={searchQuery}
          handleFilteredShorts={handleFilteredShorts}
          filteredShorts={filteredShorts}
        />

        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p className="movies-cardlist__error">{error}</p>
        ) : searchDone && filteredMovies.length === 0 ? (
          <p className="movies-cardlist__error">{SEARCH_ERRORS.NTH_FOUND}</p>
        ) : (
          searchDone &&
          filteredMovies.length > 0 && (
            <MoviesCardList
              cards={filteredMovies}
              sevedMoviesArr={sevedMoviesArr}
              handleAddMovie={handleAddMovie}
              handleDeleteMovies={handleDeleteMovies}
              handleSavedMovieDelete={handleSavedMovieDelete}
            />
          )
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
