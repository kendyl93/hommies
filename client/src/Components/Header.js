import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
