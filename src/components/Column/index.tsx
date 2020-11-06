import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface ColumnProps {
  className?: string;
  columnSpan: number;
}

const Column: FC<ColumnProps> = (props) => {
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

export default Column;
