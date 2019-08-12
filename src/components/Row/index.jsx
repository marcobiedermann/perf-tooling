import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Row = props => {
  const { children } = props;

  return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: null,
};

export default Row;
