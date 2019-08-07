import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Audit = props => {
  const { authors, date, name, tags, targets, types, url } = props;

  return (
    <>
      <h3>
        <a href={url}>{name}</a>
      </h3>
      <h4>
        {date} by{' '}
        {authors.map(author => (
          <>{author.twitter ? <a href={`https://twitter.com/${author.twitter}`}>{author.name}</a> : author.name}</>
        ))}
      </h4>
      <ul>
        {types.map(type => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <dl>
        <dt>Audit for:</dt>
        {targets.map(target => (
          <dd key={target}>
            <a href={target}>{target}</a>
          </dd>
        ))}
      </dl>
      {tags && <Tags tags={tags} />}
    </>
  );
};

Audit.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      twitter: PropTypes.string,
    }),
  ),
  date: PropTypes.string,
  name: PropTypes.string,
  stats: PropTypes.shape({
    length: PropTypes.number,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  targets: PropTypes.arrayOf(PropTypes.string),
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

Audit.defaultProps = {
  authors: [],
  date: '',
  name: '',
  stats: null,
  tags: [],
  targets: [],
  types: [],
  url: '',
};

export default Audit;
