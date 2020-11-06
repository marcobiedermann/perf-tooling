import classNames from 'classnames';
import React, { FC } from 'react';
import Audit, { AuditProps } from '../Audit';
import styles from './style.module.css';

export interface AuditsProps {
  audits: AuditProps[];
  className?: string;
}

const Audits: FC<AuditsProps> = (props) => {
  const { audits, className } = props;

  return (
    <ul className={classNames(className, styles.audits)}>
      {audits.map((audit) => (
        <li key={audit.objectId}>
          <Audit {...audit} />
        </li>
      ))}
    </ul>
  );
};

export default Audits;
