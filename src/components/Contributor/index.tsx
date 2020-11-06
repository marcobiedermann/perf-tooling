import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface ContributorProps {
  avatar_url: string;
  className?: string;
  html_url: string;
  id: string;
  login: string;
}

const Contributor: FC<ContributorProps> = (props) => {
  const { avatar_url, className, html_url, login } = props;

  return (
    <a
      href={html_url}
      className={classNames(className, styles.contributor)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={avatar_url} alt={login} width="40" height="40" />
    </a>
  );
};

export default Contributor;
