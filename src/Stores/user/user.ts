// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = (): { type: string; payload: string } => ({
	type: 'SET_CURRENT_USER',
	payload: JSON.stringify(localStorage.getItem('profile')),
});
