import React, { FC } from 'react';
import { Box } from '@mui/material';
import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCart } from 'Stores/cart/cart.actions';
import { ReactComponent as Icon } from 'Assets/shopping-bag.svg';

interface CartIconProps {
	count?: number;
}
const CartIcon: FC<CartIconProps> = ({ count }) => {
	const dispatch = useDispatch();
	const toggle = () => {
		dispatch(toggleCart());
	};
	return (
		<Box className="cart-icon" onClick={toggle}>
			<Icon />
			<span className="item-count">{count ?? 0}</span>
		</Box>
	);
};

export default CartIcon;
