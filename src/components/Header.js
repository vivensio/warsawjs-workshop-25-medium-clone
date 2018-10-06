import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a href="/" className="navbar-brand">blogbuster</a>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">Sign in</a>
        </li>
        <li className="nav-item">
          <a href="/register" className="nav-link">Sign up</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
