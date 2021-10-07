import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

interface CartDropDownProps {}
const CartDropDown: React.FC<CartDropDownProps> = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">m</div>

			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropDown;
