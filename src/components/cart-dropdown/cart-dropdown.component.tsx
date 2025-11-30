import CartItemComp from 'Components/cart-item/cartItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'Stores';
import { ICartItem } from 'Stores/cart/cart.reducer';
import { toggleCart } from 'Stores/cart/cart.actions';
import { selectCartItems } from 'Stores/cart/cart.selector';
import CustomButton from 'Components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { useAppDispatch, useAppSelector } from 'Stores/hook';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	const cartItems = useAppSelector<RootState, ICartItem[]>(selectCartItems);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItemComp {...cartItem} key={cartItem.id} />)
				) : (
					<span className="empty-message">Your Cart is Empty.</span>
				)}
			</div>

			<CustomButton
				type="button"
				onClick={() => {
					navigate('/checkout');
					dispatch(toggleCart());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropDown;
