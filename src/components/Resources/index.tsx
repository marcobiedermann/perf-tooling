import classNames from 'classnames';
import React, { FC } from 'react';
import Resource, { ResourceProps } from '../Resource';
import styles from './style.module.css';

export interface ResourcesProps {
  className?: string;
  resources: ResourceProps[];
}

const Resources: FC<ResourcesProps> = (props) => {
  const { className, resources } = props;

  return (
    <ul className={classNames(className, styles.resources)}>
      {resources.map((resource) => (
        <li key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
  );
};

export default Resources;
