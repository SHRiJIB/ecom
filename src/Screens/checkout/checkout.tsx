import React, { FC } from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from 'Stores/cart/cart.selector';
import CheckoutItem from 'Components/checkout-item/CheckoutItem';
import CheckoutForm from 'Components/StripeCheckOutForm/CheckOutForm';
import { useAppSelector } from 'Stores/hook';

const Checkout: FC = () => {
	const cartItems = useAppSelector(selectCartItems);
	const totalPrice = useAppSelector(selectCartTotal);
	return (
		<div className="checkout-page">
			<div className="checkout-container">
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
				{cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} item={cartItem} />
				))}
			</div>

			<div className="total">TOTAL: ${totalPrice}</div>
			<CheckoutForm />
		</div>
	);
};

export default Checkout;
