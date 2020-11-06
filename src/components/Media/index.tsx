import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface MediaProps {
  className?: string;
}

const Media: FC<MediaProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media)} {...otherProps} />;
};

export default Media;
