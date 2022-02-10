import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import { CartState } from './cart.reducer';

export const selectCart = (state: RootState): CartState => state.cart;
export const selectCartItems = createSelector([selectCart], ({ cartItems }) =>
	Object.keys(cartItems).map((key) => cartItems[key])
);
export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
	items.reduce((count, item) => count + item.quantity, 0)
);
export const selectCartDropDownStatus = createSelector([selectCart], (cart) => cart.isOpen);
export const selectCartTotal = createSelector([selectCartItems], (items) =>
	items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
);
