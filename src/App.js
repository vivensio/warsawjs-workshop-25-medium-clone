import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to WarsawJS Workshop #25!
          </p>
          <a
            className="App-link"
            href="https://github.com/warsawjs/workshop-setup/blob/master/25/2/index.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with WarsawJS
          </a>
        </header>
      </div>
    );
  }
}

export default App;
