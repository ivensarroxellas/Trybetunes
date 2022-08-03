import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { musicsList } = this.props;
    return (
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
              </div>
            );
          }
          return null;
        })}
      </ul>
    );
  }
}

MusicCard.propTypes = {
  musicsList: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string,
  })).isRequired,
};
export default MusicCard;
