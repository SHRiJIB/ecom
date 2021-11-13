import { Item } from 'components/collection-preview/collection-preview.component';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Stores';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	const cartItems = useSelector<RootState, Item[]>((state) => state.cart.cartItems);
	console.log(cartItems);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">m</div>

			<CustomButton type="button">GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropDown;
