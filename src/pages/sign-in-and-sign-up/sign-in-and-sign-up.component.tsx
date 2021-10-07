import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from '../../components/sign-in/sign-in.component';
import Signup from '../../components/signup/signup.component';
import './sign-in-and-sign-up.styles.scss';

const SigninAndSignup: FC = () => {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/signup" component={Signup} />
			</Switch>
		</div>
	);
};

export default SigninAndSignup;
