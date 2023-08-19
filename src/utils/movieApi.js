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

  // фильмы
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then(this._handleResponse);
  }
}

const movieApi = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default movieApi;
