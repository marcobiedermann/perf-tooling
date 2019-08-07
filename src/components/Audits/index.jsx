import PropTypes from 'prop-types';
import React from 'react';
import Audit from '../Audit';

const Audits = props => {
  const { audits } = props;

  return (
    <ul>
      {audits.map(audit => (
        <li key={audit.id}>
          <Audit {...audit} />
        </li>
      ))}
    </ul>
  );
};

Audits.propTypes = {
  audits: PropTypes.arrayOf(PropTypes.shape()),
};

Audits.defaultProps = {
  audits: [],
};

export default Audits;
