import React from "react";
import {useEffect } from "react";
import searchButton from "../../../images/searchButton.svg";
import "./SearchForm.css";
import useFormWithValidation from "../../../hooks/useFormWithValidation";

function SearchForm({handleMovies, searchQuery, handleFilteredShorts, filteredShorts}) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

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
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
        <input
          className="search__input"
          value={values.inputValue || ""}
          onChange={handleChange}
          type="text"
          placeholder="Фильм"
          name="inputValue" 
          required
        />
          <button type="submit" aria-label="Найти" className="search__button" disabled={!isValid}>
            <img src={searchButton} className="search__icon" alt="Искать" />
          </button>
        </div>
        <div className="search__shorts">
            <label className="search__label">
                <input 
                className="search__checkbox" 
                type="checkbox"
                checked={filteredShorts}
                onChange={handleCheckboxChange}
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
