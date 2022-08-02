import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavegateMenu extends Component {
  render() {
    return (
      <nav>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </nav>
    );
  }
}

export default NavegateMenu;
