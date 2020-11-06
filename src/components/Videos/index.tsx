import classNames from 'classnames';
import React, { FC } from 'react';
import Video, { VideoProps } from '../Video';
import styles from './style.module.css';

export interface VideosProps {
  className?: string;
  videos: VideoProps[];
}

const Videos: FC<VideosProps> = (props) => {
  const { className, videos } = props;

  return (
    <ul className={classNames(className, styles.videos)}>
      {videos.map((video) => (
        <li key={video.objectId}>
          <Video {...video} />
        </li>
      ))}
    </ul>
  );
};

export default Videos;
