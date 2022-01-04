import { Item } from 'Components/collection-preview/collection-preview.component';
import { ICartItem } from './cart.reducer';

// eslint-disable-next-line import/prefer-default-export
export const parseAndAddItemToCart = (
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

export const decreaseQuantity = (
	id: number,
	cartItems: Record<string, ICartItem>
): Record<string, ICartItem> => {
	if (cartItems[id] === undefined) {
		return { ...cartItems };
	}

	if (cartItems[id].quantity === 1) {
		const { [id]: removedItem, ...rest } = cartItems;
		return {
			...rest,
		};
	}
	return {
		...cartItems,

		[id]: {
			...cartItems[id],

			quantity: cartItems[id].quantity - 1,
		},
	};
};
