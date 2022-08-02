import React, { Component } from 'react';
import Header from '../component/Header';

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile">Login</div>
      </>
    );
  }
}

export default Profile;
