import React from 'react';
import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCart } from 'Stores/cart/cart.actions';
import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const CartIcon = () => {
	const dispatch = useDispatch();
	const toggle = () => {
		dispatch(toggleCart());
	};
	return (
		<div className="cart-icon" onClick={toggle}>
			<Icon />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
