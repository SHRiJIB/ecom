/* eslint-disable import/prefer-default-export */
import { Item } from 'Components/collection-preview/collection-preview.component';
import { types } from './actionTypes';
import { parseToCartItem } from './utils';

export interface ICartItem extends Item {
	quantity: number;
}

export type CartItems = Record<string, ICartItem>;
export interface CartState {
	isOpen: boolean;
	cartItems: CartItems;
}
const INITIAL_STATE: CartState = {
	isOpen: false,
	cartItems: {},
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
				cartItems: { ...parseToCartItem(action.payload, state.cartItems) },
			};

		default:
			return state;
	}
};
