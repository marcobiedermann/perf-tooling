import PropTypes from 'prop-types';
import React from 'react';
import Video from '../Video';

const Videos = props => {
  const { videos } = props;

  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <Video {...video} />
        </li>
      ))}
    </ul>
  );
};

Videos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()),
};

Videos.defaultProps = {
  videos: [],
};

export default Videos;
