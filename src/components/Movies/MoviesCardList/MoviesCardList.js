import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../../hooks/useMediaQuery";


const LG_ROW_CARD_COUNT = 3;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 2;

const LG_INITIAL_CARD_COUNT = 12;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

function MoviesCardList({ cards, sevedMoviesArr, handleAddMovie, handleSavedMovieDelete, handleDeleteMovies }) {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1240px)");
  const isTablet = useMediaQuery("(min-width: 766px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(
    initialCardCount
  );

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;


  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };
  return (
    <section
    className={`${
      pathname !== "/saved-movies" ? "movies-cardlist" : "saved-movies-cardlist"
    }`}>
      <div className="movies-cardlist__container">
      {cards.slice(0, roundedVisibleCardCount).map((card) => (
          <MoviesCard
            key={card._id || card.id}
            card={card}
            handleAddMovie={handleAddMovie}
            handleSavedMovieDelete={handleSavedMovieDelete}
            handleDeleteMovies={handleDeleteMovies}
            sevedMoviesArr={sevedMoviesArr}
          />
        ))}
      </div>

        {pathname === "/movies" && visibleCardCount < cards.length && (
        <button className="button movies-cardlist__more-btn" onClick={handleClick}>
          Еще
        </button> )}
    </section>
  );
}
export default MoviesCardList;
