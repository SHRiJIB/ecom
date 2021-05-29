import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signin } from "../../api/index";

import "./sign-in.styles.scss";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const res = await signin({ email, password });
    localStorage.setItem("profile", JSON.stringify(res?.data));
    this.setState({ email: "", password: "" });
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
      <div className="sign-in">
        <h1 className="title">Sign in</h1>
        <form onSubmit={this.handleSubmit}>
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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <Link to="/signup">Don't have an account.</Link>
      </div>
    );
  }
}

export default Signin;
