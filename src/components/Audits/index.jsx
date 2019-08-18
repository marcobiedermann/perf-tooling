import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Audit from '../Audit';
import styles from './style.module.css';

const Audits = props => {
  const { audits, className } = props;

  return (
    <ul className={classNames(className, styles.audits)}>
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
  className: PropTypes.string,
};

Audits.defaultProps = {
  audits: [],
  className: '',
};

export default Audits;
