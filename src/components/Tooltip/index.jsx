import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Tooltip = props => {
  const { className, children } = props;

  return <span className={classNames(className, styles.tooltip)}>{children}</span>;
};

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  className: '',
  children: null,
};

export default Tooltip;
