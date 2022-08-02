import React, { Component } from 'react';
import Header from '../component/Header';

class Search extends Component {
  state= {
    isButtonDisabled: true,
    artistName: '',
  }

  handleChange = (event) => {
    this.setState(() => ({ [event.target.name]: event.target.value }),
      this.handledButton);
  };

  handledButton = () => {
    const { artistName } = this.state;
    const dois = 2;
    const button = artistName.length < dois;
    console.log(button);
    this.setState({
      isButtonDisabled: button,
    });
  }

  render() {
    const { isButtonDisabled, artistName } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">Search</div>
        <form>
          <input
            id="Name"
            name="artistName"
            data-testid="search-artist-input"
            type="text"
            value={ artistName }
            onChange={ this.handleChange }
          />
        </form>
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ isButtonDisabled }
        >
          Pesquisar
        </button>
      </>
    );
  }
}

export default Search;
