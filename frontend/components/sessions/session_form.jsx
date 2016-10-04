import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    debugger
    if(this.props.formType === "login") {
      user = {
        user: { username: this.state.username, password: this.state.password }
      };
    } else {
      user = {
        user: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          name: this.state.name
        }
      };
    }
    this.props.processForm(user, this.props.formType);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let errors = this.props.errors;
    if (typeof errors === 'undefined'){
      errors = [];
    }

    const errorList = (
      <ul>
        {
          errors.map((error, idx) => {
            return <li key={idx}>{error}</li>;
          }
        )}
      </ul>
    );

    const signInForm = (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Username</h3>
        </label>
        <input type="text" onChange={this.update("username")} />

        <label>
          <h3>Password</h3>
        </label>
        <input type="text" onChange={this.update("password")} />

        <button>Sign In</button>
      </form>
    );

    const signUpForm = (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Username</h3>
        </label>
        <input type="text" onChange={this.update("username")} />

        <label>
          <h3>Password</h3>
        </label>
        <input type="text" onChange={this.update("password")} />

        <label>
          <h3>Email</h3>
        </label>
        <input type="text" onChange={this.update("email")} />

        <label>
          <h3>Full Name</h3>
        </label>
        <input type="text" onChange={this.update("name")} />

        <button>Sign Up</button>
      </form>
    );

    const logo = (
      <div className="logo">LOGO</div>
    );

    if(this.props.formType === "login") {
      return(
        <section>
          {logo}
          <h1>LOGIN</h1>
          {signInForm}
          <h3>Not Registered?</h3>
          <Link to="/signup">Sign Up</Link>
        </section>
      );
    } else {
      return(
        <section>
          {logo}
          <h1>SIGN UP</h1>
          {signUpForm}
          <h3>Already Registered?</h3>
          <Link to="/login">Sign In</Link>
        </section>
      );
    }
  }
}

export default SessionForm;
