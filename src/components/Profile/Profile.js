import React from "react";
import Header from "../Header/Header";

import "./Profile.css";

function Profile(loggedIn) {
  return (
    <>
       <Header loggedIn={loggedIn}/>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form name="profile" className="profile__fieldset">
          <div className="profile-form__container">
            <label className="profile-form__label">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              className="profile-form__input form__input_form_name input"
              minLength="2"
              maxLength="60"
              required
              placeholder="Имя"
              autoComplete="off"
            />
            
          </div>
          
          <div className="profile-form__container">
          <label className="profile-form__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="profile-form__input form__input_form_email input"
            minLength="2"
            maxLength="60"
            required
            placeholder="E-mail"
            autoComplete="off"
          />
          
          </div>
        </form>
<div className="profile__btn-container">
    <span className="profile__error">Что-то пошло не так</span>
    <button className="profile__btn-edit button">Редактировать</button>
    <button className="profile__btn-signout button">Выйти из аккаунта</button>
</div>

      </section>
    </>
  );
}

export default Profile;
