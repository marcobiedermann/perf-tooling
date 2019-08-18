import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const MediaObject = props => {
  const { children, className, modifier } = props;

  return (
    <div
      className={classNames(className, styles.media__object, {
        [styles[`media__object${capitalize(modifier)}`]]: modifier,
      })}
    >
      {children}
    </div>
  );
};

MediaObject.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['left', 'right']),
};

MediaObject.defaultProps = {
  children: null,
  className: '',
  modifier: 'left',
};

export default MediaObject;
