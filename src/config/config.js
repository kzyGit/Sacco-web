import axios from 'axios';
import { store } from '../store/store';

export const baseUrl = 'http://127.0.0.1:8000/api/v1/';
export { store };

export const request = () =>
    axios.create({
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
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });
