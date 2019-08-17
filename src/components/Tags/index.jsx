import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';

const Tags = props => {
  const { tags } = props;

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
