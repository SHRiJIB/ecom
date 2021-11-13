/* eslint-disable import/prefer-default-export */
import { Item } from 'components/collection-preview/collection-preview.component';
import { types } from './actionTypes';

export interface CartState {
	isOpen: boolean;
	cartItems: Item[];
}
const INITIAL_STATE = {
	isOpen: false,
	cartItems: [],
};

export const cartReducer = (
	state = INITIAL_STATE,
	action: { type: string; payload: Item }
): CartState => {
	switch (action.type) {
		case types.TOGGLE:
			return {
				...state,
				isOpen: !state.isOpen,
			};
		case types.ADD_ITEM:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		default:
			return state;
	}
};
