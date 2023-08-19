import React from "react";
import { useState, useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import "../AuthForm/AuthForm.css";
import { REG_EMAIL, REG_NAME } from "../../utils/constatns";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();


  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values.name, values.email, values.password);
    resetForm();
  }


  return (
    <AuthForm
      name="register"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      bottomText="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      noValidate
      isValid={isValid}
     
    >
      <label className="auth-form__label">Имя</label>
      <input
        type="text"
        name="name"
        id="name-register"
        className="auth-form__input auth-form__input_form_name input"
        minLength="2"
        maxLength="60"
        required
        placeholder="Имя"

        value={values.name || ""}
        onChange={handleChange}
        pattern={REG_NAME}
      />
      <span className="auth-form__input-error name-input-error">{errors.name}</span>
      <label className="auth-form__label">E-mail</label>
      <input
        type="email"
        name="email"
        id="email-register"
        className="auth-form__input auth-form__input_form_email input"
        minLength="2"
        maxLength="60"
        required
        placeholder="E-mail"
        value={values.email || ""}
        onChange={handleChange}
        pattern={REG_EMAIL}
      />
      <span className="auth-form__input-error email-input-error">{errors.email}</span>

      <label className="auth-form__label">Пароль</label>
      <input
        type="password"
        name="password"
        id="paasword-register"
        className="auth-form__input auth-form__input_form_password input"
        minLength="2"
        maxLength="60"
        required
        placeholder=""
        autoComplete="off"
        value={values.password || ""}
        onChange={handleChange}
      />
      <span className="auth-form__input-error password-input-error">{errors.password}</span>
    </AuthForm>
  );
}

export default Register;
