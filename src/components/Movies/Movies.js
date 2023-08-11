import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { movieArr } from "../../utils/arr";

function Movies(loggedIn) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={movieArr} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
