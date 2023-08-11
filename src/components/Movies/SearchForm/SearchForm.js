import React from "react";
import searchButton from "../../../images/searchButton.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            type="text"
            name="search-input"
            id="search-input"
            className="search__input"
            minLength="2"
            maxLength="60"
            required
            placeholder="Фильм"
          />
          <button type="submit" aria-label="Найти" className="search__button">
            <img src={searchButton} className="search__icon" alt="Искать" />
          </button>
        </div>
        <div className="search__shorts">
            <label className="search__label">
                <input className="search__checkbox" type="checkbox"/>
                <span className="search__checkbox-span"></span>
            </label>
            <p className="search__choice">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
