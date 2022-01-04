/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ICartItem } from 'Stores/cart/cart.reducer';
import { addItem, decreaseItemQuantity, removeItem } from 'Stores/cart/cart.actions';
import './checkout-item.styles.scss';

interface CheckoutItemProps {
	item: ICartItem;
}
const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
	const { name, imageUrl, price, quantity, id } = item;
	const dispatch = useDispatch();
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() => {
						dispatch(decreaseItemQuantity(id));
					}}
				>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={() => {
						dispatch(addItem(item));
					}}
				>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div
				className="remove-button"
				onClick={() => {
					dispatch(removeItem(id));
				}}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
