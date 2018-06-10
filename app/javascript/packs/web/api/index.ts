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
  show: (id) => { return axios.get(`${todosUrl}/${id}`) },
  update: (id, params) => { return axios.put(`${todosUrl}/${id}`, params) },
}
