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
};

$contactPrivateAPI.interceptors.request.use(authInterceptor);

export const UserApi = {
  async register(formData) {
    const { data } = await $contactPublicAPI.post('/register', formData);
    return data;
  },
};
