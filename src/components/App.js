import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Home from './Home';
import Register from './Register';

class App extends Component {
  state = {
    currentUser: null,
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Router>
          <Home path='/' />
          <Register path='/register' />
        </Router>
      </div>
    );
  }
}

export default App;
