import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from 'Components/header/header.component';
import Signin from 'Components/sign-in/sign-in.component';
import Signup from 'Components/signup/signup.component';
import HomePage from 'Screens/home/homepage.component';
import Shop from 'Screens/shop/shop.component';
import CheckoutPage from 'Screens/checkout/checkout';
import { selectCurrentUser } from 'Stores/user/user.selector';
import { useAppSelector } from 'Stores/hook';

function App(): React.JSX.Element {
	const user = useAppSelector(selectCurrentUser);
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop/*" element={<Shop />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
				<Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
			</Routes>
		</div>
	);
}

export default App;
