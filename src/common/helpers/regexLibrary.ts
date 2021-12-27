export const regexLibrary = {
  TEXT_INPUT: /^[-_ 0-9\p{L}]+$/u,
  PHONE_INPUT: /^[0-9 ()+]+$/,
  SPACES_INPUT: /^\s[0-9 ()+]+$/,
  // eslint-disable-next-line no-useless-escape
  PASSWORD_INPUT: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&=+_-])[A-Za-z\d@$!%*#?&=+_-]{8,}$/,

  EMAIL:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  WEB_SITE:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
};
