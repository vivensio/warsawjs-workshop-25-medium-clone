import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Home from './Home';

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
          {/* Write your code here */}
        </Router>
      </div>
    );
  }
}

export default App;
