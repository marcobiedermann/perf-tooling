import React from 'react';
import styles from './style.module.css';

const Row = (props) => {
  return <div className={styles.row} {...props} />;
};

export default Row;
