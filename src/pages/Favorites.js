import React, { Component } from 'react';
import Header from '../component/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-favorites">Favorites</div>
      </>
    );
  }
}

export default Favorites;
