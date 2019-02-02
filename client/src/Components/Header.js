import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper container">
          <a href="#!" class="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
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
