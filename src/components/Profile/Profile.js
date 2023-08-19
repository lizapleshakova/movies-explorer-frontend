import "./Profile.css";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { REG_EMAIL, REG_NAME } from "../../utils/constatns";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile({ onUpdateUser, onSignOut, webError, webSuces }) {
  const currentUser = useContext(CurrentUserContext);
  const [statusBtn, setStatusBtn] = useState(false); // статус кнопки: редактировать/сохранить
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleBtnClick = () => {
    setStatusBtn(true);
  };

  useEffect(() => {
    if (currentUser) {
      resetForm({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onUpdateUser({
        name: values.name,
        email: values.email,
      });
      setStatusBtn(false);
    }
  }

  const validBtn =
    (isValid && values.email !== currentUser.email) ||
    (isValid && values.name !== currentUser.name);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}</h2>

      <form
        name="profile"
        className="profile__fieldset"
        noValidate
        // onSubmit={handleSubmit}
      >
        <div className="profile-form__container">
          <label className="profile-form__label">Имя</label>

          <input
            type="text"
            name="name"
            id="name"
            value={values.name || ""}
            onChange={handleChange}
            className="profile-form__input form__input_form_name input"
            minLength="2"
            maxLength="60"
            required
            placeholder="Имя"
            pattern={REG_NAME}

            disabled={!statusBtn}
          />
        </div>
        <span className="profile__error">{errors.name}</span>

        <div className="profile-form__container">
          <label className="profile-form__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email || ""}
            onChange={handleChange}
            className="profile-form__input form__input_form_email input"
            minLength="2"
            maxLength="60"
            required
            placeholder="E-mail"
            pattern={REG_EMAIL}
            disabled={!statusBtn}
          />
        </div>
        <span className="profile__error">{errors.email}</span>
      </form>
      <div className="profile__btn-container">
        <span className="profile__error profile__error-btn">Что-то пошло не так</span>
        {statusBtn ? (
          <button
            className="profile__btn-save button"
            onClick={handleSubmit}
            disabled={!validBtn}
            type="submit"
            aria-label="Сохранить изменения и закрыть"
          >
            Сохранить
          </button>
        ) : (
          <div className="profile__btn-container">
            <button
              className="profile__btn-edit button"
              onClick={handleBtnClick}
              type="submit"
            >
              Редактировать
            </button>
            <button
              className="profile__btn-signout button"
              onClick={onSignOut}
              type="submit"
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
