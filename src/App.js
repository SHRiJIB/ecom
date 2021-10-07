import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import Signin from './components/sign-in/sign-in.component';
import Signup from './components/signup/signup.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

function App() {
	const user = useSelector((state) => state.user.currentUser);
	console.log(user);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/signin" render={() => (user ? <Redirect to="/" /> : <Signin />)} />
				<Route exact path="/signup" render={() => (user ? <Redirect to="/" /> : <Signup />)} />
			</Switch>
		</div>
	);
}

export default App;
