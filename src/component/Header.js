import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state ={
    loading: true,
    name: '',
  }

  async componentDidMount() {
    const response = await getUser();
    const { name } = response;
    console.log(name);
    this.setState({
      loading: false,
      name,

    });
  }

  render() {
    const { loading, name } = this.state;
    return (
      <header data-testid="header-component">
        {loading
          ? <span>Carregando...</span>
          : <h2 data-testid="header-user-name">{name}</h2>}
      </header>
    );
  }
}

export default Header;
