import { User } from 'Stores/user/user.reducer';

export interface AuthData extends User {}

export interface AuthState {
	authData: {
		result: User;
	} | null;
}

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (
	state = { authData: null },
	action: { type: string; data: AuthState['authData'] }
): AuthState => {
	switch (action.type) {
		case 'AUTH':
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return {
				...state,
				authData: action?.data,
			};
		case 'LOGOUT':
			localStorage.clear();

			return state;
		default:
			return state;
	}
};
