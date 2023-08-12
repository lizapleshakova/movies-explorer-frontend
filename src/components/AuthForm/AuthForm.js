import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/headerLogo.svg";

import "./AuthForm.css";

function AuthForm(props) {
  return (
    <div className="page">
      <section className="auth-form">
        <Link to="/">
          <img
            src={headerLogo}
            alt="Логотип"
            className="link auth-form__logo"
          />
        </Link>
        <h2 className="auth-form__title">{props.title}</h2>
        <form
          name={`${props.name}`}
          className={`auth-form__fieldset auth-form-${props.name}`}
        >
          {props.children}
        </form>
        <button
          type="submit"
          aria-label="Сохранить изменения и закрыть"
          className={`button auth-form__button auth-form__button_type-${props.name}`}
        >
          {props.buttonText}
        </button>
        <div className="auth-form__container">
          <p className="auth-form__bottom">{props.bottomText}</p>
          <Link to={`${props.link}`} className="auth-form__link link">
            {props.linkText}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AuthForm;
