import { default as _axios } from 'axios';

export const axios = _axios.create({
  headers: {
    'Accept': 'application/json',
  },
  xsrfCookieName: 'X-CSRF-Token',
  xsrfHeaderName: 'X-CSRF-Token',
  baseURL: `${location.protocol}//${location.host}`,
});

const todosUrl = '/users/me/todos';
export const todos = {
  //index: params => { return axios.post(todosUrl, params) },
  index: () => { return axios.get('https://api.myjson.com/bins/17jy56') },
  create: (params) => { return axios.post(todosUrl, params) },
}
