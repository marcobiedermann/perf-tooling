import PropTypes from 'prop-types';
import React from 'react';
import Tool from '../Tool';

const Tools = props => {
  const { tools } = props;

  return (
    <ul>
      {tools.map(tool => (
        <li key={tool.id}>
          <Tool {...tool} />
        </li>
      ))}
    </ul>
  );
};

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape()),
};

Tools.defaultProps = {
  tools: [],
};

export default Tools;
