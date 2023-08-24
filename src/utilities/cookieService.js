// cookieService.js
import Cookies from 'js-cookie';

const COOKIE_EXPIRATION_DAYS = 7;

export const setCookie = (name, value) => {
  Cookies.set(name, value, { expires: COOKIE_EXPIRATION_DAYS });
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};