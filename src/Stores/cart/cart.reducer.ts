/* eslint-disable import/prefer-default-export */
import { Item } from 'components/collection-preview/collection-preview.component';
import { types } from './actionTypes';

export interface CartItem extends Item {
	quantity: number;
}
export interface CartState {
	isOpen: boolean;
	cartItems: Record<string, CartItem>;
}
const INITIAL_STATE = {
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
				cartItems: { ...toCartItem(action.payload, state.cartItems) },
			};
		default:
			return state;
	}
};

const toCartItem = (item: Item, cartItems: Record<string, CartItem>): Record<string, CartItem> => {
	if (cartItems[item.id] === undefined) {
		return {
			...cartItems,
			[item.id]: {
				...item,
				quantity: 1,
			},
		};
	}

	return {
		...cartItems,
		[item.id]: {
			...cartItems[item.id],
			quantity: cartItems[item.id].quantity + 1,
		},
	};
};
