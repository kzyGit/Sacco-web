import axios from 'axios'
import { baseUrl, auth_request } from '../config/config';

export const userService = {
	get,
	post,
	put,
	deleteDetail
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


function put(apiEndpoint, payload) {
	return axios.get(baseUrl + apiEndpoint, payload)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
		})
}

function deleteDetail(apiEndpoint) {
	return axios.get(baseUrl + apiEndpoint)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
		})
}