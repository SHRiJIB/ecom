import CartItemComp from 'components/cart-item/cartItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Stores';
import { ICartItem } from 'Stores/cart/cart.reducer';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	const cartItems = useSelector<RootState, Record<string, ICartItem>>(
		(state) => state.cart.cartItems
	);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{Object.keys(cartItems).map((id) => (
					<CartItemComp {...cartItems[id]} />
				))}
			</div>

			<CustomButton type="button">GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropDown;
