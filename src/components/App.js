import React, { Component } from 'react';
import { Router } from '@reach/router';
import Article from './Article';
import Editor from './Editor';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import api from '../api';
import { getToken } from '../jwt';

class App extends Component {
  state = {
    currentUser: null,
  }

  componentDidMount() {
    const token = getToken();
    if (token) {
      this.setCurrentUser();
    }
  }

  setCurrentUser = () => {
    return api.Auth.current().then(data => this.setState({ currentUser: data.user }));
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Router>
          <Home path='/' />
          <Login path='/login' setCurrentUser={this.setCurrentUser} />
          <Register path='/register' setCurrentUser={this.setCurrentUser} />
          <Article path='/article/:slug' currentUser={currentUser} />
          <Editor path='/editor/:slug' />
          <Editor path='/editor' />
        </Router>
      </div>
    );
  }
}

export default App;
