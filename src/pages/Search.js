import React, { Component } from 'react';
import Header from '../component/Header';

class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">Search</div>
      </>
    );
  }
}

export default Search;
