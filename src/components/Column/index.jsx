import PropTypes from 'prop-types';
import React from 'react';

const Column = props => {
  const { children } = props;

  return <div>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node,
};

Column.defaultProps = {
  children: null,
};

export default Column;
