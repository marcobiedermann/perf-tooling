import React, { FC } from 'react';
import styles from './style.module.css';

const Row: FC = (props) => {
  return <div className={styles.row} {...props} />;
};

export default Row;
