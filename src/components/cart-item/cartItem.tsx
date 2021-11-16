import React, { FC } from 'react';
import { ICartItem } from 'Stores/cart/cart.reducer';
import './cart-item.styles.scss';

interface CartItemProps extends ICartItem {}

const CartItem: FC<CartItemProps> = ({ imageUrl, name, quantity, price }) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item-img" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x $ {price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
