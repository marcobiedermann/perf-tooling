import React, { FC } from 'react';
import styles from './style.module.css';

const Tag: FC = (props) => {
  return <span className={styles.tag} {...props} />;
};

export default Tag;
