import {AUTH_TOKEN_KEY} from '../const';

export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
}

export function setToken(token: string){
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
