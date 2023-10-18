import { URL_MOVIE, URL_MAIN_API } from "../utils/constatns";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  // запрос
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  // проверка токена
  checkToken = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  };
  // регистрация
  register(name, email, password) {
    console.log(name, email, password);
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }
  // авторизация
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          console.log(data);
          return data;
        }
      });
  }

  // получение информация о пользователе
  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  // изменение профиля
  setProfile({ name, email }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }

  // КИНО
  getMoviesInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  createMovies({
    country,
    director,
    duration,
    year,
    description,
    image,
    nameEN,
    nameRU,
    trailerLink,
    id,
  }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `${URL_MOVIE}${image.url}`,
        nameRU: nameRU,
        nameEN: nameEN,
        trailerLink: trailerLink,
        thumbnail: `${URL_MOVIE}${image.formats.thumbnail.url}`,
        movieId: id,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const api = new Api({
  baseUrl: URL_MAIN_API,
});

export default api;
