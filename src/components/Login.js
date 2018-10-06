import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';
import api from '../api';
import { setToken } from '../jwt';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  changeEmail = (ev) => {
    this.setState({ email: ev.target.value });
  }

  changePassword = (ev) => {
    this.setState({ password: ev.target.value });
  }

  submitForm = async (ev) => {
    ev.preventDefault();
    const { email, password } = this.state;

    const response = await api.Auth.login(email, password);
    setToken(response.user.token);
    this.props.setCurrentUser();
    navigate('/');
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Sign in
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

export default Login;
