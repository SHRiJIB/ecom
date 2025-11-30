/* eslint-disable no-console */
import { NavigateFunction } from 'react-router-dom';
import { FormData } from 'Components/signup/signup.component';
import { Dispatch } from '@reduxjs/toolkit';
import * as api from '../../Api/index';

export const signin = (formData: { email: string; password: string }) => {
	return async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.signin(formData);
			dispatch({ type: 'AUTH', data });
			dispatch({ type: 'SET_CURRENT_USER', payload: data });
		} catch (error) {
			console.log(error);
		}
	};
};
export const signup =
	(formData: FormData, navigate: NavigateFunction) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.signup(formData);
			dispatch({ type: 'AUTH', data });
			dispatch({ type: 'SET_CURRENT_USER', payload: data });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
