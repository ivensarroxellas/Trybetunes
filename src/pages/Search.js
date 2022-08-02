import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  state= {
    isButtonDisabled: true,
    artistName: '',
    searchedAlbum: [],
    loading: false,
    ready: false,
    artistReceived: '',
  }

  handleChange = (event) => {
    this.setState(() => ({ [event.target.name]: event.target.value }),
      this.handledButton);
  };

  handledButton = () => {
    const { artistName } = this.state;
    const dois = 2;
    const button = artistName.length < dois;
    this.setState({
      isButtonDisabled: button,
    });
  }

  onClicked = async (event) => {
    event.preventDefault();
    const { artistName } = this.state;
    this.setState({
      loading: true,
    });
    const response = await searchAlbumsAPI(artistName);
    this.setState({
      loading: false,
      ready: true,
      artistReceived: artistName,
      artistName: '',
      searchedAlbum: response,
    });
  }

  render() {
    const { isButtonDisabled, artistName, searchedAlbum, loading,
      ready, artistReceived } = this.state;
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
          onClick={ this.onClicked }
        >
          Pesquisar
        </button>
        {loading && <span>Carregando...</span>}
        {ready && <h1>{`Resultado de álbuns de: ${artistReceived}`}</h1> }
        { ready && searchedAlbum.length === 0 && <h1>Nenhum álbum foi encontrado</h1> }
        <ul>
          {searchedAlbum.map((artist, index) => (
            <li key={ index }>
              <h4>{artist.artistId}</h4>
              <h2>{artist.artistName}</h2>
              <h3>{artist.collectionId}</h3>
              <h2>{artist.collectionName}</h2>
              <h3>{artist.collectionPrice}</h3>
              <img src={ artist.artworkUrl100 } alt="teste" />
              <h2>{artist.releaseDate}</h2>
              <h3>{artist.trackCount}</h3>
              <Link
                to={ `/album/${artist.collectionId}` }
                data-testid={ `link-to-album-${artist.collectionId}` }
              >
                Música
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Search;
