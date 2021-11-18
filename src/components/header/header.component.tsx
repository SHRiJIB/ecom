import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { RootState } from 'Stores';
import { User } from 'Stores/user/user.reducer';
import { CartItems } from 'Stores/cart/cart.reducer';
import Logo from '../../assets/crown.png';
import Avatar from '../avatar/Avatar.component';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header: React.FC = () => {
	const [itemCount, setItemCount] = useState<number>(0);
	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();
	const isOpen = useSelector<RootState, boolean>((state) => state.cart.isOpen);
	const currentUser = useSelector<RootState, { result: User } | null>(
		(state) => state.user.currentUser
	);
	const cartItems = useSelector<RootState, CartItems>((state) => state.cart.cartItems);
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		dispatch({ type: 'SET_CURRENT_USER', payload: null });
		history.push('/');
	};

	const getItemCount = useCallback(
		(items: CartItems) => Object.keys(items).reduce((count, key) => count + items[key].quantity, 0),
		[cartItems]
	);
	useEffect(() => {
		const profileData = localStorage.getItem('profile');
		setItemCount(getItemCount(cartItems));
		if (profileData) {
			dispatch({ type: 'SET_CURRENT_USER', payload: JSON.parse(profileData) });
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);
	return (
		<div className="header">
			<Link to="/" className="logo-cotainer">
				<img src={Logo} className="logo" alt="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				<CartIcon count={itemCount} />
				{currentUser ? (
					<div className="profile">
						<Avatar imgUrl={currentUser?.result.image ?? ''} name={currentUser?.result?.name} />

						<button type="button" className="logout-btn" onClick={logout}>
							Log out
						</button>
					</div>
				) : (
					<div>
						<Link className="option" to="/signin">
							SIGNIN
						</Link>
					</div>
				)}
			</div>
			{isOpen && <CartDropDown />}
		</div>
	);
};

export default Header;
