import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface TooltipProps {
  className?: string;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { className, ...otherProps } = props;

  return <span className={classNames(className, styles.tooltip)} {...otherProps} />;
};

export default Tooltip;
