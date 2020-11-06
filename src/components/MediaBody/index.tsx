import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface MediaBodyProps {
  className?: string;
}

const MediaBody: FC<MediaBodyProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media__body)} {...otherProps} />;
};

export default MediaBody;
