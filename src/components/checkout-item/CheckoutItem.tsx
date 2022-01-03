import React from 'react';
import { ICartItem } from 'Stores/cart/cart.reducer';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
	item: ICartItem;
}
const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">${price}</span>
			<div className="remove-button">&#10005</div>
		</div>
	);
};

export default CheckoutItem;
