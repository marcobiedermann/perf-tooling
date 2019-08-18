import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';
import React from 'react';
import * as resources from '../../constants/resources';
import styles from './style.module.css';

const Resource = props => {
  const { className, id, url } = props;

  return (
    <a
      href={url}
      className={classNames(className, styles.resource, {
        [styles[`resource${capitalize(id)}`]]: id,
      })}
    >
      {resources[id]}
    </a>
  );
};

Resource.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
};

Resource.defaultProps = {
  className: '',
  id: '',
  url: '',
};

export default Resource;
