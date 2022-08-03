import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  checkedItem = (music, index) => {
    this.setState({
      isChecked: [index],
      loading: true,
    }, (() => {
      addSong(music.trackId).then(() => {
        this.setState({
          loading: false,
        });
      });
    }));
  }

  render() {
    const { musicsList } = this.props;
    const { loading } = this.state;
    return (
      <div>
        { loading && <h1>Carregando...</h1> }
        <ul>
          {musicsList.map((music, index) => {
            if (index) {
              return (
                <div key={ music.trackId }>
                  <li>{music.trackName}</li>
                  <audio data-testid="audio-component" src={ music.previewUrl } controls>
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
                      data-testid={ `checkbox-music-${music.trackId}` }
                      onClick={ () => this.checkedItem(music) }
                    />
                  </label>
                </div>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicsList: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string,
    trackId: PropTypes.number,
  })).isRequired,
};
export default MusicCard;
