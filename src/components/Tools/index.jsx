import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Tool from '../Tool';
import styles from './style.module.css';

const Tools = props => {
  const { className, tools } = props;

  return (
    <ul className={classNames(className, styles.tools)}>
      {tools.map(tool => (
        <li key={tool.objectId}>
          <Tool {...tool} />
        </li>
      ))}
    </ul>
  );
};

Tools.propTypes = {
  className: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.shape()),
};

Tools.defaultProps = {
  className: '',
  tools: [],
};

export default Tools;
