import { default as _axios } from 'axios';

export const axios = _axios.create({
  headers: {
    'Accept': 'application/json',
  },
  xsrfCookieName: 'X-CSRF-Token',
  xsrfHeaderName: 'X-CSRF-Token',
  baseURL: `${location.protocol}//${location.host}`,
});
