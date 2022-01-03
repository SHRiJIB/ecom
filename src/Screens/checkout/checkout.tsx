import React, { FC } from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from 'Stores/cart/cart.selector';
import { useSelector } from 'react-redux';

const Checkout: FC = () => {
	const cartItems = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotal);
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-blocks">
					<span>Product</span>
				</div>
				<div className="header-blocks">
					<span>Description</span>
				</div>
				<div className="header-blocks">
					<span>Quantitiy</span>
				</div>
				<div className="header-blocks">
					<span>Price</span>
				</div>
				<div className="header-blocks">
					<span>Remove</span>
				</div>
			</div>
			{Object.keys(cartItems).map((key) => cartItems[key].name)}

			<div className="total">TOTAL: ${totalPrice}</div>
		</div>
	);
};

export default Checkout;
