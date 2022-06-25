import {doPost} from '../BaseAPI.js';

export function signup(userInfo){
	console.log("In Auth", userInfo);
	return doPost("http://localhost:8000/api/signup", userInfo);
}