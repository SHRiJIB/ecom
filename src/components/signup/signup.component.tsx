import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signup } from '../../Stores/auth/auth';
import './signup.styles.scss';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { history } = this.props;
		this.props.signup({ ...this.state }, history);
		this.setState({ firstName: '', lastName: '', email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="container">
				<div className="sign-up">
					<h1 className="title">Sign up</h1>
					<form onSubmit={this.handleSubmit}>
						<FormInput
							id="firstName"
							type="text"
							value={this.state.firstName}
							handleChange={this.handleChange}
							label="First Name"
							name="firstName"
							required
						/>
						<FormInput
							id="lastName"
							type="text"
							value={this.state.lastName}
							handleChange={this.handleChange}
							label="Last Name"
							name="lastName"
							required
						/>
						<FormInput
							id="email"
							type="email"
							value={this.state.email}
							handleChange={this.handleChange}
							label="Email"
							name="email"
							required
						/>
						<FormInput
							id="password"
							type="password"
							value={this.state.password}
							handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = (dispatch) => ({
	signup: (formData, history) => dispatch(signup(formData, history)),
});

export default connect(null, mapDispatchToProps)(Signup);
