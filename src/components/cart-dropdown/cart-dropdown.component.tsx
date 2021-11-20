import CartItemComp from 'components/cart-item/cartItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Stores';
import { CartItems } from 'Stores/cart/cart.reducer';
import { selectCartItems } from 'Stores/cart/cart.selector';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	const cartItems = useSelector<RootState, CartItems>(selectCartItems);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{Object.keys(cartItems).map((id) => (
					<CartItemComp {...cartItems[id]} key={id} />
				))}
			</div>

			<CustomButton type="button">GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropDown;
