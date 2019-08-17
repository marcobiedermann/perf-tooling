import PropTypes from 'prop-types';
import React from 'react';
import Resource from '../Resource';

const Resources = props => {
  const { resources } = props;

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
  );
};

Resources.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

Resources.defaultProps = {
  resources: [],
};

export default Resources;
