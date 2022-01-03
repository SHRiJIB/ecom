import CartItemComp from 'Components/cart-item/cartItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from 'Stores';
import { CartItems } from 'Stores/cart/cart.reducer';
import { toggleCart } from 'Stores/cart/cart.actions';
import { selectCartItems } from 'Stores/cart/cart.selector';
import CustomButton from 'Components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	const cartItems = useSelector<RootState, CartItems>(selectCartItems);
	const dispatch = useDispatch();
	const cartItemsIds = Object.keys(cartItems);
	const history = useHistory();
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItemsIds.length ? (
					cartItemsIds.map((id) => <CartItemComp {...cartItems[id]} key={id} />)
				) : (
					<span className="empty-message">Your Cart is Empty.</span>
				)}
			</div>

			<CustomButton
				type="button"
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCart());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropDown;
