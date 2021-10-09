import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from 'Stores/auth/auth';
import { FormData } from 'components/signup/signup.component';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

const Signin: FC = () => {
	const initialFormData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(signin(formData));
		setFormData({ ...initialFormData });
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="container">
			<div className="sign-in">
				<h1 className="title">Sign in</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						id="email"
						type="email"
						value={formData.email}
						handleChange={handleChange}
						label="Email"
						name="email"
						required
					/>
					<FormInput
						id="password"
						type="password"
						value={formData.password}
						handleChange={handleChange}
						label="Password"
						name="password"
						required
					/>

					<CustomButton type="submit">Sign In</CustomButton>
				</form>
				<Link to="/signup">Don&apos;t have an account.</Link>
			</div>
		</div>
	);
};

export default Signin;
