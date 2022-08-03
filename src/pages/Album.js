import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../component/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musicsList: [],
    };
  }

  componentDidMount() {
    this.takeId();
  }

  takeId = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musicsList: musics });
  }

  render() {
    const { musicsList } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">Album</div>
        <p data-testid="artist-name">{musicsList.length && musicsList[0].artistName}</p>
        <p data-testid="album-name">
          {musicsList.length
          && musicsList[0].collectionName}
        </p>
        <div>Music Card</div>
        <MusicCard musicsList={ musicsList } />
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
