import { Item } from 'Components/collection-preview/collection-preview.component';
import { types } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleCart = (): { type: string } => ({
	type: types.TOGGLE,
});

export const addItem = (item: Item): { type: string; payload: Item } => ({
	type: types.ADD_ITEM,
	payload: item,
});

export const removeItem = (id: number): { type: string; payload: number } => ({
	type: types.REMOVE_ITEM_FROM_CART,
	payload: id,
});

export const decreaseItemQuantity = (id: number): { type: string; payload: number } => ({
	type: types.DECREASE_ITEM_QUANTITY,
	payload: id,
});
