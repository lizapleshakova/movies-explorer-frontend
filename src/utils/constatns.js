export const CONFLICT_ERROR = "Ошибка: 409";
export const UNAUTH_ERROR = "Ошибка: 401";

export const LOGIN_ERRORS = {
  INVALID_EMAIL_PASSW: "Вы ввели неправильный логин или пароль.",
  INVALID_TOKEN:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  AUTH_ERROR: "При авторизации произошла ошибка. Переданный токен некорректен.",
};


export const REGISTER_ERRORS = {
  DUPL_REGISTER_ERROR: "Пользователь с таким email уже существует.",
  REGISTRATE_ERROR: "При регистрации пользователя произошла ошибка.",
};

export const UPDATE_PROFILE_ERRORS = {
  DUPL_PROFILE_ERROR: "Пользователь с таким email уже существует.",
  UPDATE_PROFILE_ERROR: "При обновлении профиля произошла ошибка.",
};

export const SEARCH_ERRORS = {
  NTH_FOUND: "Ничего не найдено",
  SEARCH_SERVER_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
  SEARCH_ERROR: "Введите ключевое слово",
};

export const ERRORS_MESSAGES = {
  NOT_FOUND_ERROR: "404 Страница по указанному маршруту не найдена",
  SERVER_ERROR: "На сервере произошла ошибка",
  ERROR: "Ошибка получения данных."
};

export const SUCCSES_MESSAGES = {
  REGISTER_SUCCSES: "Поздравляем! Вы успешно зарегистировались!",
  LOGIN_SUCCSES: "Вход выполнен!",
  UPDATE_PROFILE_SUCCSES: "Ваши данные успешно обновлены!",
};

export const URL_MOVIE = "https://api.nomoreparties.co/";
export const URL_MAIN_API = "https://api.pleshakova.nomoredomains.xyz";
export const URL_MOVIE_API = "https://api.nomoreparties.co/beatfilm-movies";

export const REG_EMAIL = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";


export const REG_NAME = "^[A-Za-zА-Яа-яЁё \\-]+$";

export const SHORT_FILM_DURATION = 40;




