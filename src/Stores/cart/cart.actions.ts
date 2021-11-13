import { Item } from 'components/collection-preview/collection-preview.component';
import { types } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleCart = (): { type: string } => ({
	type: types.TOGGLE,
});

export const addItem = (item: Item): { type: string; payload: Item } => ({
	type: types.ADD_ITEM,
	payload: item,
});
