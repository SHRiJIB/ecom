import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signup } from 'Stores/auth/auth';
import FormInput from 'Components/form-input/form-input.component';
import './signup.styles.scss';
import CustomMuiButton from 'Components/custom-mui-button';

interface SignUpFormProps {}
export interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
const Signup: FC<SignUpFormProps> = () => {
	const initialFormData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	const history = useHistory();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(signup(formData, history));
		setFormData({ ...initialFormData });
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="container">
			<div className="sign-up">
				<h1 className="title">Sign up</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						id="firstName"
						type="text"
						value={formData.firstName}
						handleChange={handleChange}
						label="First Name"
						name="firstName"
						required
					/>
					<FormInput
						id="lastName"
						type="text"
						value={formData.lastName}
						handleChange={handleChange}
						label="Last Name"
						name="lastName"
						required
					/>
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

					<CustomMuiButton
						type="submit"
						variant="contained"
						size="large"
						disableElevation
						disableRipple
					>
						Sign up
					</CustomMuiButton>
				</form>
				<Link to="/signin">Already have an account?</Link>
			</div>
		</div>
	);
};

export default Signup;
