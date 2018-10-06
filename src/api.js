import { getToken } from './jwt';
const API_ROOT = 'http://300f2f4d.ngrok.io/api';

const responseBody = res => res.json();

const getHeaders = () => {
  const token = getToken();
  return new Headers({
    "Authorization": `Token ${token}`,
    "Content-Type": "application/json; charset=utf-8",
  });
};

const requests = {
  post: (url, body) =>
    fetch(`${API_ROOT}${url}`, { method: 'POST', headers: getHeaders(), body: JSON.stringify(body) }).then(responseBody),
  get: url =>
    fetch(`${API_ROOT}${url}`, { headers: getHeaders() }).then(responseBody),
  put: (url, body) =>
    fetch(`${API_ROOT}${url}`, { method: 'PUT', headers: getHeaders(), body: JSON.stringify(body) }).then(responseBody),
};

const Auth = {
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, password, email } }),
  current: () =>
    requests.get('/user'),
};

const Articles = {
  create: article =>
    requests.post('/articles', { article }),
  get: slug => 
    requests.get(`/articles/${slug}`),
};

export default {
  Auth,
  Articles,
};
