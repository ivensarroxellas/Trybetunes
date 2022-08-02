import React, { Component } from 'react';
import NavegateMenu from './NavegateMenu';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state ={
    loading: true,
    name: '',
  }

  async componentDidMount() {
    const response = await getUser();
    const { name } = response;
    this.setState({
      loading: false,
      name,
    });
  }

  render() {
    const { loading, name } = this.state;
    return (
      <header data-testid="header-component">
        <NavegateMenu />
        <section>
          {loading
            ? <span>Carregando...</span>
            : <h2 data-testid="header-user-name">{name}</h2>}
        </section>
      </header>
    );
  }
}

export default Header;
