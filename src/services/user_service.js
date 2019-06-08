import axios from 'axios'
import { baseUrl, auth_request } from '../config/config';

export const userService = {
	get,
	post,
	put,
	deleteDetail,
	auth_post
}

function get(apiEndpoint) {
	return auth_request().get(baseUrl+apiEndpoint)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
		})
}

function post(apiEndpoint, payload){
    return axios.post(baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
		return err
    })
}

function auth_post(apiEndpoint, payload){
    return auth_request().post(baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
		return err
    })
}


function put(apiEndpoint, payload) {
	return auth_request().put(baseUrl + apiEndpoint, payload)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			return err
		})
}

function deleteDetail (apiEndpoint) {
	return auth_request().delete(baseUrl + apiEndpoint)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			return err
		})
}