import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface MediaObjectProps {
  className?: string;
  modifier?: 'left' | 'right';
}

const MediaObject: FC<MediaObjectProps> = (props) => {
  const { className, modifier = 'left', ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.media__object, {
        [styles[`media__object${capitalize(modifier)}`]]: modifier,
      })}
      {...otherProps}
    />
  );
};

export default MediaObject;
