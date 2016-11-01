import React from 'react';
import { Link, hashHistory } from 'react-router';

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
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if(this.props.formType === "login") {
      user = {
        user: { username: this.state.username, password: this.state.password }
      };
    } else if(this.props.formType === "signup") {
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

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/home");
    }
  }

  guestLogin(){
    const user = {
      user: {
        username: "DocWatson",
        password: "password"
      }
    }
    this.props.processForm(user, 'login');
  };

  render() {
    let errors = this.props.errors;
    if (typeof errors === 'undefined'){
      errors = [];
    }

    const errorList = (
      <ul>
        {
          errors.map((error, idx) => {
            return <li className="errors" key={idx}>{error}</li>;
          }
        )}
      </ul>
    );

    const signInForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.update("username")} placeholder="Username"/>
        <input type="password" onChange={this.update("password")} placeholder="Password" />
        <button className="button">Sign In</button>
      </form>
    );

    const signUpForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.update("username")} placeholder="Username" />
        <input type="password" onChange={this.update("password")} placeholder="Password" />
        <input type="text" onChange={this.update("email")} placeholder="Email" />
        <input type="text" onChange={this.update("name")} placeholder="Full Name" />

        <button className="button">Sign Up</button>
      </form>
    );

    const logo = (
      <div className="logo">
        <strong className="logoSub">LET'S GET</strong>
        <strong className="logoTap">TAPSY</strong>
      </div>
    );

    if(this.props.formType === "login") {
      return(
        <main className="session-background">
          <section className="session">
            {logo}
            {errorList}
            {signInForm}
            <div className="guest-login">
              Log in as <strong onClick={this.guestLogin} id="guest">GUEST</strong>
            </div>
            <footer className="foot-link">
              <h3>Not Registered?</h3>
              <Link id='registered-click' to="/signup">Sign Up</Link>
            </footer>
          </section>
        </main>
      );
    } else {
      return(
        <main className="session-background">
          <section className="session">
            {logo}
            {errorList}
            {signUpForm}
            <footer className="foot-link">
              <h3>Already Registered?</h3>
              <Link id='registered-click' to="/login">Sign In</Link>
            </footer>
          </section>
        </main>
      );
    }
  }
}

export default SessionForm;
