import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { RootState } from 'Stores';
import './App.css';
import Header from 'Components/header/header.component';
import Signin from 'Components/sign-in/sign-in.component';
import Signup from 'Components/signup/signup.component';
import HomePage from 'Screens/homepage/homepage.component';
import Shop from 'Screens/shop/shop.component';
import CheckoutPage from 'Screens/checkout/checkout';

function App(): JSX.Element {
	const user = useSelector<RootState>((state) => state.user.currentUser);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route exact path="/signin" render={() => (user ? <Redirect to="/" /> : <Signin />)} />
				<Route exact path="/signup" render={() => (user ? <Redirect to="/" /> : <Signup />)} />
			</Switch>
		</div>
	);
}

export default App;
