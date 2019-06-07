import axios from 'axios';
import store from '../store/store';
import baseUrl from './config'

export { store };
export const request = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});


export const auth_request = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: store.getState().auth.token
    }
  });
