import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Resource from '../Resource';
import styles from './style.module.css';

const Resources = props => {
  const { className, resources } = props;

  return (
    <ul className={classNames(className, styles.resources)}>
      {resources.map(resource => (
        <li key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
  );
};

Resources.propTypes = {
  className: PropTypes.string,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

Resources.defaultProps = {
  className: '',
  resources: [],
};

export default Resources;
