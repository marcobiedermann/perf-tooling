import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Section = props => {
  const { children } = props;

  return <section className={styles.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};

export default Section;
