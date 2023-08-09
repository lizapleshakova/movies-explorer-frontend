import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css";


import "./Login.css";

function Login(props) {
  return (
    <AuthForm
      name="loginForm"
      title="Рады видеть!"
      buttonText="Войти"
      bottomText="Ещё не зарегистрированы?"
      link='/signup'
      linkText="Регистрация"
    >
        <label className="form__label">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input form__input_form_email input"
          minLength="2"
          maxLength="60"
          required
          placeholder="E-mail"
          autoComplete="off"
        />
        <span className="form__input-error email-input-error"></span>

        <label className="form__label">Пароль</label>
        <input
          type="password"
          name="password"
          id="paasword"
          className="form__input form__input_form_password input"
          minLength="2"
          maxLength="60"
          required
          placeholder=""
          autoComplete="off"
        />
        <span className="form__input-error password-input-error"></span>
    </AuthForm> 
  );
}

export default Login;