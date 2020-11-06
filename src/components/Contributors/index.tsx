import classNames from 'classnames';
import React, { FC } from 'react';
import Contributor, { ContributorProps } from '../Contributor';
import styles from './style.module.css';

export interface ContributorsProps {
  className?: string;
  contributors: ContributorProps[];
}

const Contributors: FC<ContributorsProps> = (props) => {
  const { className, contributors } = props;

  return (
    <ul className={classNames(className, styles.contributors)}>
      {contributors.map((contributor) => (
        <li key={contributor.id}>
          <Contributor {...contributor} />
        </li>
      ))}
    </ul>
  );
};

export default Contributors;
