import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isChecked: false,
    };
  }

  componentDidMount() {
    getFavoriteSongs().then((songs) => {
      const { trackId } = this.props;
      if (songs.some((song) => song.trackId === trackId)) {
        this.setState({ isChecked: true });
      }
    });
  }

  checkedItem = (id) => {
    const { isChecked } = this.state;
    if (!isChecked) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
    this.setState({
      loading: true,
    }, (() => {
      addSong(id).then(() => {
        this.setState({
          loading: false,
        });
      });
    }));
  }

  render() {
    const { loading, isChecked } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <>
        { loading && <h1>Carregando...</h1> }
        <div>
          <li>{trackName}</li>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
          <label htmlFor="favorite">
            <input
              id="favorite"
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ () => this.checkedItem(trackId) }
              checked={ isChecked }
            />
          </label>
        </div>
      </>
    );
  }
}

MusicDetails.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,

};
export default MusicDetails;
