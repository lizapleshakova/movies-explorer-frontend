import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";


function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
  useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values.email, values.password);
    resetForm();
  }
  return (
    <AuthForm
      name="login"
      title="Рады видеть!"
      buttonText="Войти"
      bottomText="Ещё не зарегистрированы?"
      link='/signup'
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      
        <label className="auth-form__label">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="auth-form__input auth-form__input_form_email input"
          minLength="2"
          maxLength="60"
          required
          placeholder="E-mail"
          autoComplete="off"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="auth-form__input-error email-input-error">{errors.email}</span>

        <label className="auth-form__label">Пароль</label>
        <input
          type="password"
          name="password"
          id="paasword"
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

export default Login;