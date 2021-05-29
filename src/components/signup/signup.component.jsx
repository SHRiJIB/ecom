import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../api";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./signup.styles.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const res = await signup({ firstName, lastName, email, password });
    localStorage.setItem("profile", JSON.stringify(res?.data));
    this.setState({ firstName: "", lastName: "", email: "", password: "" });
    const { history } = this.props;
    if (history) {
      history.push("/");
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
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
    );
  }
}

export default Signup;
