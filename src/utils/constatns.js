export const loginErrors = {
  INVALID_EMAIL_PASSW: "Вы ввели неправильный логин или пароль.",
  INVALID_TOKEN:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  AUTH_ERROR: "При авторизации произошла ошибка. Переданный токен некорректен.",
};

export const registrateErrors = {
  DUPL_REGISTER_ERROR: "Пользователь с таким email уже существует.",
  REGISTRATE_ERROR: "При регистрации пользователя произошла ошибка.",
};

export const updateProfileErrors = {
  DUPL_PROFILE_ERROR: "Пользователь с таким email уже существует.",
  UPDATE_PROFILE_ERROR: "При обновлении профиля произошла ошибка.",
};

export const searchErrors = {
  SERVER_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
  SEARCH_ERROR: "Введите ключевое слово",
};

export const allErrors = {
  NOT_FOUND_ERROR: "404 Страница по указанному маршруту не найдена",
  SERVER_ERROR: "На сервере произошла ошибка",
};


export const REG_EMAIL = "^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$";


export const REG_NAME = "^[a-zA-Zа-яА-ЯёЁ\s-]{2,30}$";



