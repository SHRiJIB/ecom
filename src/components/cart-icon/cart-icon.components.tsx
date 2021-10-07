import React, { FC } from 'react';
import { Box } from '@mui/material';
import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCart } from 'Stores/cart/cart.actions';
import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const CartIcon: FC = () => {
	const dispatch = useDispatch();
	const toggle = () => {
		dispatch(toggleCart());
	};
	return (
		<Box className="cart-icon" onClick={toggle}>
			<Icon />
			<span className="item-count">0</span>
		</Box>
	);
};

export default CartIcon;
