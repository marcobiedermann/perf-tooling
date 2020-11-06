import classNames from 'classnames';
import React, { FC } from 'react';
import Tool, { ToolProps } from '../Tool';
import styles from './style.module.css';

export interface ToolsProps {
  className?: string;
  tools: ToolProps[];
}

const Tools: FC<ToolsProps> = (props) => {
  const { className, tools } = props;

  return (
    <ul className={classNames(className, styles.tools)}>
      {tools.map((tool) => (
        <li key={tool.objectId}>
          <Tool {...tool} />
        </li>
      ))}
    </ul>
  );
};

export default Tools;
