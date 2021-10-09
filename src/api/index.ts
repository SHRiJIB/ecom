/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const API = axios.create({ baseURL: 'https://ecom23.herokuapp.com' });

export const signin = (formData: FormData) => API.post('/user/signin', formData);
export const signup = (formData: FormData) => API.post('/user/signup', formData);
