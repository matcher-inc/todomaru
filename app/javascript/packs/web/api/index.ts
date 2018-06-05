import { default as _axios } from 'axios';

export const axios = _axios.create({
  headers: {
    'Accept': 'application/json',
  },
  xsrfCookieName: 'X-CSRF-Token',
  xsrfHeaderName: 'X-CSRF-Token',
  baseURL: `${location.protocol}//${location.host}`,
});

const todosUrl = '/users/1/todos';
export const todos = {
  //index: params => { return axios.post(todosUrl, params) },
  index: () => { return axios.get('https://api.myjson.com/bins/17jy56') },
  create: (params) => { return axios.post(todosUrl, params) },
  //show: (id) => { return axios.get(`${todosUrl}/${id}`) },
  show: (id) => { return axios.get('https://api.myjson.com/bins/1bcb66') },
  update: (id, params) => { return axios.put('https://api.myjson.com/bins/1bcb66') },
}
