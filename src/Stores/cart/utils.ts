import { Item } from 'Components/collection-preview/collection-preview.component';
import { ICartItem } from './cart.reducer';

// eslint-disable-next-line import/prefer-default-export
export const parseToCartItem = (
	item: Item,
	cartItems: Record<string, ICartItem>
): Record<string, ICartItem> => {
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
