import * as api from '../../api/index';

export const signin = (formData) => async (dispatch) => {
	try {
		const { data } = await api.signin(formData);
		dispatch({ type: 'AUTH', data });
		dispatch({ type: 'SET_CURRENT_USER', payload: data });
	} catch (error) {
		console.log(error);
	}
};
export const signup = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signup(formData);
		dispatch({ type: 'AUTH', data });
		dispatch({ type: 'SET_CURRENT_USER', payload: data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
