import React from 'react';
import styles from './style.module.css';

const Tag = (props) => {
  return <span className={styles.tag} {...props} />;
};

export default Tag;
