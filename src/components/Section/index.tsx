import React from 'react';
import styles from './style.module.css';

const Section = (props) => {
  return <section className={styles.section} {...props} />;
};

export default Section;
