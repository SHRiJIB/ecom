// eslint-disable-next-line import/prefer-default-export
export const userReducer = (
	state = { currentUser: null },
	action: { type: string; payload: string }
): { currentUser: string | null } => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, currentUser: action.payload };
		default:
			return state;
	}
};
