import React from "react";
import {useEffect, useState } from "react";
import searchButton from "../../../images/searchButton.svg";
import "./SearchForm.css";
import useFormWithValidation from "../../../hooks/useFormWithValidation";

import { SEARCH_ERRORS } from "../../../utils/constatns";

function SearchForm({handleMovies, searchQuery, handleFilteredShorts, filteredShorts}) {
  const [isServerError, setIsServerError] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleCheckboxChange = (event) => {
    handleFilteredShorts(event.target.checked);
  };


  useEffect(() => {
    resetForm({ inputValue: searchQuery });
  }, [resetForm, searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleMovies(values.inputValue);
  };


  return (
    <section className="search">
      <form 
      className="search__form" 
      onSubmit={handleSubmit}
      noValidate
      name="search_form"
      >
        <div className="search__container">
        <input
          className="search__input"
          value={values.inputValue || ""}
          onChange={handleChange}
          type="text"
          minLength={1}
          placeholder="Фильм"
          name="inputValue" 
          required
        />
          <button type="submit" aria-label="Найти" className="search__button button"  disabled={!isValid || !values.inputValue}>
            <img src={searchButton} className="search__icon" alt="Искать" />
          </button>

        </div>
        <span
          className={`search__error ${
            errors.inputValue ? "search__error_active" : ""
          }`}
        >
          {isServerError || SEARCH_ERRORS.SEARCH_ERROR}
        </span>
        <div className="search__shorts">
            <label className="search__label">
                <input 
                className="search__checkbox" 
                type="checkbox"
                checked={filteredShorts}
                onChange={handleCheckboxChange}
                id="search__checkbox" 
                />
                <span className="search__checkbox-span"></span>
            </label>
            <p className="search__choice">Короткометражки</p>
        </div>
      </form>
     
    </section>
  );
}

export default SearchForm;
