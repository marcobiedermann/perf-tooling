import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Tag = props => {
  const { children } = props;

  return <span className={styles.tag}>{children}</span>;
};

Tag.propTypes = {
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null,
};

export default Tag;
