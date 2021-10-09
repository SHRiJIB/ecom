/* eslint-disable import/prefer-default-export */
import { types } from './actionTypes';

export interface CartState {
	isOpen: boolean;
}
const INITIAL_STATE = {
	isOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action: { type: string }): CartState => {
	switch (action.type) {
		case types.TOGGLE:
			return {
				...state,
				isOpen: !state.isOpen,
			};
		default:
			return state;
	}
};
