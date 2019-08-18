import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Footer = props => {
  const { children, className } = props;

  return <footer className={classNames(className, styles.footer)}>{children}</footer>;
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
  children: null,
};

export default Footer;
