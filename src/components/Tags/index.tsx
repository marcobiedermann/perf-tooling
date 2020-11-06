import classNames from 'classnames';
import React, { FC } from 'react';
import Tag from '../Tag';
import styles from './style.module.css';

export interface TagsProps {
  className?: string;
  tags: string[];
}

const Tags: FC<TagsProps> = (props) => {
  const { className, tags } = props;

  return (
    <ul className={classNames(className, styles.tags)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
