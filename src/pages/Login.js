import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state ={
    loading: false,
    ready: false,
  }

  saveName = async (event) => {
    event.preventDefault();
    const { nameEntered } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name: nameEntered });
    this.setState({
      ready: true,
    });
  }

  render() {
    const { isButtonDisabled, nameEntered, onInputChange } = this.props;
    const { loading, ready } = this.state;
    return (
      <>
        { ready && <Redirect push to="/search" />}
        {loading && <span>Carregando...</span>}
        <div data-testid="page-login">Login</div>
        <form>
          <label htmlFor="Name">
            Nome
            <input
              id="Name"
              name="nameEntered"
              data-testid="login-name-input"
              type="text"
              value={ nameEntered }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ this.saveName }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  nameEntered: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Login;
