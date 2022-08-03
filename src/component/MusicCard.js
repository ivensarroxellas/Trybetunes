import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicDetails from './MusicDetails';

class MusicCard extends Component {
  render() {
    const { musicsList } = this.props;
    return (
      <div>
        <ul>
          {musicsList.map((music, index) => {
            if (index) {
              return (
                <MusicDetails
                  key={ music.trackId }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                />
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
