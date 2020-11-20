import classNames from 'classnames';
import React, { FC } from 'react';
import Resources from '../Resources';
import Tags from '../Tags';
import styles from './style.module.css';

export interface ToolProps {
  className?: string;
  description: string;
  name: string;
  objectId: string;
  tags: string[];
  resources: {
    angular?: {
      url: string;
    };
    apache?: {
      url: string;
    };
    bookmarklet?: {
      url: string;
    };
    broccoli?: {
      url: string;
    };
    chrome?: {
      url: string;
    };
    cli?: {
      url: string;
    };
    firefox?: {
      url: string;
    };
    googleAppsScript?: {
      url: string;
    };
    grunt?: {
      url: string;
    };
    gulp?: {
      url: string;
    };
    illustrator?: {
      url: string;
    };
    java?: {
      url: string;
    };
    javascript?: {
      url: string;
    };
    linux?: {
      url: string;
    };
    mac?: {
      url: string;
    };
    nginx?: {
      url: string;
    };
    node?: {
      url: string;
    };
    php?: {
      url: string;
    };
    python?: {
      url: string;
    };
    ruby?: {
      url: string;
    };
    service?: {
      isPaid?: boolean;
      url: string;
    };
    windows?: {
      url: string;
    };
    wordpress?: {
      url: string;
    };
  };
}

const Tool: FC<ToolProps> = (props) => {
  const { className, description, name, tags, resources } = props;

  return (
    <div className={classNames(className, styles.tool)}>
      <h3>
        {name}
        {resources.service && resources.service.isPaid && <small>(Paid)</small>}
      </h3>
      <p>{description}</p>
      <Resources
        resources={Object.keys(resources)
          .filter((key) => resources[key])
          .map((key) => {
            const resource = resources[key];
            const { url } = resource;

            return {
              id: key,
              url,
            };
          })}
      />
      <Tags tags={tags} />
    </div>
  );
};

export default Tool;
