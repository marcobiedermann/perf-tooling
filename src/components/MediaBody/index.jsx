import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const MediaBody = props => {
  const { children, className } = props;

  return <div className={classNames(className, styles.media__body)}>{children}</div>;
};

MediaBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

MediaBody.defaultProps = {
  children: null,
  className: '',
};

export default MediaBody;
