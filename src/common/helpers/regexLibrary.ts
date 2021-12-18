export const regexLibrary = {
  TEXT_INPUT: /^[-_ 0-9\p{L}]+$/u,
  PHONE_INPUT: /^[0-9 ()+]+$/,
  SPACES_INPUT: /^\s[0-9 ()+]+$/,
  // eslint-disable-next-line no-useless-escape
  PASSWORD_INPUT: /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/,

  WEB_SITE:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
};
