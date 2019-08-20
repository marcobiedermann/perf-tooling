import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Contributor from '../Contributor';
import styles from './style.module.css';

const Contributors = props => {
  const { className, contributors } = props;

  return (
    <ul className={classNames(className, styles.contributors)}>
      {contributors.map(contributor => (
        <li key={contributor.id}>
          <Contributor {...contributor} />
        </li>
      ))}
    </ul>
  );
};

Contributors.propTypes = {
  className: PropTypes.string,
  contributors: PropTypes.arrayOf(PropTypes.shape()),
};

Contributors.defaultProps = {
  className: '',
  contributors: [],
};

export default Contributors;
