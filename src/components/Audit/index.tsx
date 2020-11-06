import React, { FC } from 'react';
import Tags from '../Tags';

interface Author {
  name: string;
  twitter?: string;
}

export interface AuditProps {
  authors: Author[];
  date: string;
  name: string;
  objectId: string;
  tags: string[];
  targets: string[];
  types: string[];
  url: string;
}

const Audit: FC<AuditProps> = (props) => {
  const { authors, date, name, tags, targets, types, url } = props;

  return (
    <>
      <h3>
        <a href={url}>{name}</a>
      </h3>
      <h4>
        {date} by{' '}
        {authors.map((author) => (
          <>
            {author.twitter ? (
              <a href={`https://twitter.com/${author.twitter}`}>{author.name}</a>
            ) : (
              author.name
            )}
          </>
        ))}
      </h4>
      <ul>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <dl>
        <dt>Audit for:</dt>
        {targets.map((target) => (
          <dd key={target}>
            <a href={target}>{target}</a>
          </dd>
        ))}
      </dl>
      {tags && <Tags tags={tags} />}
    </>
  );
};

export default Audit;
