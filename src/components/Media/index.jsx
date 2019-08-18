import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Media = props => {
  const { children, className } = props;

  return <div className={classNames(className, styles.media)}>{children}</div>;
};

Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Media.defaultProps = {
  children: null,
  className: '',
};

export default Media;
