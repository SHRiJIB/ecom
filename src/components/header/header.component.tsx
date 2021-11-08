import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { RootState } from 'Stores';
import { User } from 'Stores/user/user.reducer';
import Logo from '../../assets/crown.png';
import Avatar from '../avatar/Avatar.component';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

interface IUser {
	image: string;
	result: User;
}
const Header: React.FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();
	const isOpen = useSelector<RootState>((state) => state.cart.isOpen);
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		dispatch({ type: 'SET_CURRENT_USER', payload: null });
		history.push('/');
	};
	useEffect(() => {
		const json = localStorage.getItem('profile');
		if (json) setUser(JSON.parse(json));
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
				<CartIcon />
				{user ? (
					<div className="profile">
						<Avatar imgUrl={user?.image} name={user?.result?.name} />

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
