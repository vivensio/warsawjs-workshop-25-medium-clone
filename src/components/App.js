import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = {
    currentUser: null,
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
      </div>
    );
  }
}

export default App;
