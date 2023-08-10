import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css";
import "./Register.css";

function Register(props) {
  return (
    <AuthForm
      name="register"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      bottomText="Уже зарегистрированы?"
      link='/signin'
      linkText="Войти"
    >

<label className="form__label">Имя</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input form__input_form_name input"
          minLength="2"
          maxLength="60"
          required
          placeholder="Имя"
          autoComplete="off"
        />
        <span className="form__input-error name-input-error"></span>
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
        <span className="form__input-error password-input-error">Что-то пошло не так...</span>
    </AuthForm> 
  );
}

export default Register;