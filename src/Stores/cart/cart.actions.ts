import { types } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleCart = (): { type: string } => ({
	type: types.TOGGLE,
});
