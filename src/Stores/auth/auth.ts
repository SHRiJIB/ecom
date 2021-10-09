import { RouteComponentProps } from 'react-router';
import { FormData } from 'components/signup/signup.component';
import { Dispatch } from 'redux';
import * as api from '../../api/index';

export const signin =
	(formData: FormData) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.signin(formData);
			dispatch({ type: 'AUTH', data });
			dispatch({ type: 'SET_CURRENT_USER', payload: data });
		} catch (error) {
			console.log(error);
		}
	};
export const signup =
	(formData: FormData, history: RouteComponentProps['history']) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.signup(formData);
			dispatch({ type: 'AUTH', data });
			dispatch({ type: 'SET_CURRENT_USER', payload: data });
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
