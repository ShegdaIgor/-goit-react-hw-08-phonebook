import axios from 'axios';

const $contactPublicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $contactPrivateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$contactPrivateAPI.interceptors.request.use(authInterceptor);

export const UserApi = {
  async register(formData) {
    const { data } = await $contactPublicAPI.post('users/signup', formData);
    return data;
  },
  async login(formData) {
    const { data } = await $contactPublicAPI.post('users/login', formData);
    return data;
  },
  async Logout() {
    const { data } = await $contactPrivateAPI.post('users/logout');
    return data;
  },
  async Current() {
    const { data } = await $contactPrivateAPI.get('users/current');
    return data;
  },
};
