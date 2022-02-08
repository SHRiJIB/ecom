import { User } from 'Stores/user/user.reducer';

export type AuthData = User | null;
interface AuthStoreAction {
	type: string;
	data: AuthData;
}

export interface AuthState {
	authData: AuthData;
}

const INITIAL_AUTH_STATE: AuthState = { authData: null };
// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = INITIAL_AUTH_STATE, action: AuthStoreAction): AuthState => {
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
