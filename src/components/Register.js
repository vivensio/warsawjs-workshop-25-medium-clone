import React, { Component } from 'react';
import { Link } from '@reach/router';

class Register extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  }

  changeEmail = (ev) => {
    this.setState({ email: ev.target.value });
  }

  changePassword = (ev) => {
    this.setState({ password: ev.target.value });
  }

  changeUsername = (ev) => {
    this.setState({ username: ev.target.value });
  }

  submitForm = (ev) => {
    ev.preventDefault();
    const { username, email, password } = this.state;

    console.log(username, email, password);
  }

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.changeUsername} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                  >
                    Sign up
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
