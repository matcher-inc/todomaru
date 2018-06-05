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
  index: (params=null) => { return axios.get(todosUrl, params) },
  create: (params) => { return axios.post(todosUrl, params) },
  show: (id) => { return axios.get('https://api.myjson.com/bins/1bcb66') },
  update: (id, params) => { return axios.put('https://api.myjson.com/bins/1bcb66') },
}
