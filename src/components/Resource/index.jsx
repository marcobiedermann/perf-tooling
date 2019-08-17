import PropTypes from 'prop-types';
import React from 'react';
import * as resources from '../../constants/resources';

const Resource = props => {
  const { id, url } = props;

  return <a href={url}>{resources[id]}</a>;
};

Resource.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
};

Resource.defaultProps = {
  id: '',
  url: '',
};

export default Resource;
