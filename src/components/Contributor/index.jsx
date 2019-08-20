import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Contributor = props => {
  const { avatar_url, className, html_url, login } = props;

  return (
    <a href={html_url} className={classNames(className, styles.contributor)} target="_blank" rel="noopener noreferrer">
      <img src={avatar_url} alt={login} width="40" height="40" />
    </a>
  );
};

Contributor.propTypes = {
  avatar_url: PropTypes.string,
  className: PropTypes.string,
  html_url: PropTypes.string,
  login: PropTypes.string,
};

Contributor.defaultProps = {
  avatar_url: '',
  className: '',
  html_url: '',
  login: '',
};

export default Contributor;
