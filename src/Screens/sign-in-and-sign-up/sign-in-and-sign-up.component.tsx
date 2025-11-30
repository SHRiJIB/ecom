import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../../Components/sign-in/sign-in.component';
import Signup from '../../Components/signup/signup.component';
import './sign-in-and-sign-up.styles.scss';

const SigninAndSignup: FC = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
};

export default SigninAndSignup;
