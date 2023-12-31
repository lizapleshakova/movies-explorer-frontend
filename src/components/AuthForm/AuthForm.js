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
          onSubmit={props.onSubmit}
          className={`auth-form__fieldset auth-form-${props.name}`}
          
        >
          {props.children}
        
        <button
          type="submit"
          aria-label="Сохранить изменения и закрыть"
          className={`button auth-form__button ${!props.isValid ? 'auth-form__button_disabled' : ''}`}
          disabled={!props.isValid}
        >
          {props.buttonText}
        </button>
        </form>
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
