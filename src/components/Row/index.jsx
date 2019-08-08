import PropTypes from 'prop-types';
import React from 'react';

const Row = props => {
  const { children } = props;

  return <div>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: null,
};

export default Row;
