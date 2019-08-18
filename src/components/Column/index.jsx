import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Column = props => {
  const { children, className, columnSpan } = props;

  return (
    <div
      className={classNames(className, styles.column, {
        [styles[`columnColumnSpan${columnSpan}`]]: columnSpan,
      })}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columnSpan: PropTypes.number,
};

Column.defaultProps = {
  children: null,
  className: '',
  columnSpan: 0,
};

export default Column;
