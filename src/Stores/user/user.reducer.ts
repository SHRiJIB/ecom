import { AuthData } from 'Stores/auth/Auth.reducer';

export interface User {
	createdAt: string;
	email: string;
	name: string;
	image?: string;
	password: string;
	updatedAt: string;
	__v: number;
	_id: string;
	token: string;
}

export interface UserState {
	currentUser: AuthData;
}

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state = { currentUser: null }, action: { type: string; payload: AuthData }): UserState => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, currentUser: action.payload };
		default:
			return state;
	}
};
