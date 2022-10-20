import axios from 'axios';
import qs from 'qs';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'mangiabene';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'mangiabene123';


export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8090';
const mapboxToken = process.env.REACT_APP_ACESS_TOKEN_MAP_BOX;

export function fetchProducts(){
    return axios(`${BASE_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}


type LoginData = {
    username: string;
    password: string;
}

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
}
