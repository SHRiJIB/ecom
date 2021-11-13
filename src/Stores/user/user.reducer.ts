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
	currentUser: {
		result: User;
	} | null;
}

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (
	state = { currentUser: null },
	action: { type: string; payload: UserState['currentUser'] }
): UserState => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, currentUser: action.payload };
		default:
			return state;
	}
};
