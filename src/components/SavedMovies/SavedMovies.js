import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { savedMovieArr } from "../../utils/arr";

function SavedMovies(loggedIn) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={savedMovieArr} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
