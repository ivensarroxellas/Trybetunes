import React, { Component } from 'react';
import Header from '../component/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album">Login</div>
      </>
    );
  }
}

export default Album;
