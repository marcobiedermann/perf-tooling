import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';
import styles from './style.module.css';

const Tags = props => {
  const { className, tags } = props;

  return (
    <ul className={classNames(className, styles.tags)}>
      {tags.map(tag => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

Tags.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Tags.defaultProps = {
  className: '',
  tags: [],
};

export default Tags;
