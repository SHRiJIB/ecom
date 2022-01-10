import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { RootState } from 'Stores';
import { Popover, Box, Button } from '@mui/material';
import { User } from 'Stores/user/user.reducer';
import { selectCartDropDownStatus, selectCartItemsCount } from 'Stores/cart/cart.selector';
import { selectCurrentUser } from 'Stores/user/user.selector';
import Avatar from 'Components/avatar/Avatar.component';
import CartIcon from 'Components/cart-icon/cart-icon.components';
import CartDropDown from 'Components/cart-dropdown/cart-dropdown.component';

import Logo from 'Assets/crown.png';
import './header.styles.scss';

const Header: React.FC = () => {
	const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(null);
	const location = useLocation();
	const dispatch = useDispatch();

	const history = useHistory();
	const isOpen = useSelector<RootState, boolean>(selectCartDropDownStatus);
	const currentUser = useSelector<RootState, { result: User } | null>(selectCurrentUser);
	const cartItemsCount = useSelector<RootState, number>(selectCartItemsCount);
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		dispatch({ type: 'SET_CURRENT_USER', payload: null });
		history.push('/');
	};
	const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorElement(event.currentTarget);
	};
	const handlePopoverClose = () => {
		setAnchorElement(null);
	};
	const open = Boolean(anchorElement);

	useEffect(() => {
		const profileData = localStorage.getItem('profile');
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
				<CartIcon count={cartItemsCount} />
				{currentUser ? (
					<div className="profile">
						<Box component="div" onClick={handlePopoverOpen}>
							<Avatar imgUrl={currentUser?.result.image ?? ''} name={currentUser?.result?.name} />
						</Box>
						<Popover
							anchorEl={anchorElement}
							open={open}
							onClose={handlePopoverClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
						>
							{/* <button type="button" className="logout-btn" onClick={logout}>
								Log out
							</button> */}
							<Button variant="contained" onClick={logout}>
								Log out
							</Button>
						</Popover>
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
