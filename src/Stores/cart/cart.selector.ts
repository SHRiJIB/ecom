import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import { CartItems, CartState } from './cart.reducer';

export const selectCart = (state: RootState): CartState => state.cart;
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const selectCartItemsCount = createSelector([selectCartItems], (items: CartItems) =>
	Object.keys(items).reduce((count, key) => count + items[key].quantity, 0)
);
export const selectCartDropDownStatus = createSelector([selectCart], (cart) => cart.isOpen);
export const selectCartTotal = createSelector([selectCartItems], (items: CartItems) =>
	Object.keys(items).reduce(
		(totalPrice, key) => totalPrice + items[key].quantity * items[key].price,
		0
	)
);
