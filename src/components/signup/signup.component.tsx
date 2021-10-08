import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss';

interface SignUpFormProps {
	history: History;
	signup: (formData: FormData, history: History) => void;
}
export interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
const Signup: FC<SignUpFormProps> = (props) => {
	const initialFormData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { history, signup } = props;
		signup(formData, history);
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

					<CustomButton type="submit">Sign up</CustomButton>
				</form>
				<Link to="/signin">Already have an account?</Link>
			</div>
		</div>
	);
};

export default Signup;
