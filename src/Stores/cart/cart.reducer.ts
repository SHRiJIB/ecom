/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { Item } from 'Components/collection-preview/collection-preview.component';
import { types } from './actionTypes';
import { decreaseQuantity, parseAndAddItemToCart } from './utils';

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
	action: { type: string; payload: Item | number }
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
				cartItems: parseAndAddItemToCart(action.payload as Item, state.cartItems),
			};
		case types.REMOVE_ITEM_FROM_CART: {
			const { [action.payload as number]: removedItem, ...rest } = state.cartItems;
			return {
				...state,
				cartItems: rest,
			};
		}
		case types.DECREASE_ITEM_QUANTITY: {
			return {
				...state,
				cartItems: decreaseQuantity(action.payload as number, state.cartItems),
			};
		}
		default:
			return state;
	}
};
