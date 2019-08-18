import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Video from '../Video';
import styles from './style.module.css';

const Videos = props => {
  const { className, videos } = props;

  return (
    <ul className={classNames(className, styles.videos)}>
      {videos.map(video => (
        <li key={video.id}>
          <Video {...video} />
        </li>
      ))}
    </ul>
  );
};

Videos.propTypes = {
  className: PropTypes.string,
  videos: PropTypes.arrayOf(PropTypes.shape()),
};

Videos.defaultProps = {
  className: '',
  videos: [],
};

export default Videos;
