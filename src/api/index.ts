/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { FormData } from 'Components/signup/signup.component';

// const API = axios.create({ baseURL: 'https://ecom23.herokuapp.com' });
const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const signin = (formData: { email: string; password: string }) =>
	API.post('/user/signin', formData);
export const signup = (formData: FormData) => API.post('/user/signup', formData);
