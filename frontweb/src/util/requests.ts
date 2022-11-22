import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getSessionData } from './auth';
import history from './history';
import { getAuthData } from './storage';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'mangiabene';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'mangiabene123';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8090';

export function fetchProducts() {
  return axios(`${BASE_URL}/products`);
}

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const makeRequest = (params: AxiosRequestConfig) => {
  return axios({
    ...params,
    baseURL: BASE_URL
  });
}

export const makePrivateRequest = (params: AxiosRequestConfig) => {
  const sessionData = getSessionData();

  const headers = {
    'Authorization': `Bearer ${sessionData.access_token}`
  }

  return makeRequest({ ...params, headers });

}


// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //
    return config;
  },
  function (error) {
    //
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    //
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push('/admin/auth');
    }
    return Promise.reject(error);
  }
);
