import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface StatsProps {
  className?: string;
  stats: string[];
}

const Stats: FC<StatsProps> = (props) => {
  const { className, stats } = props;

  return (
    <ul className={classNames(className, styles.stats)}>
      {stats.map((stat) => (
        <li key={stat}>{stat}</li>
      ))}
    </ul>
  );
};

export default Stats;
