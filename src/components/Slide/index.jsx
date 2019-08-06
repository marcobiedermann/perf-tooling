import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Slide = props => {
  const { authors, date, name, stats, tags, url } = props;

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
      <ul>{stats && <li>Length: {stats.length} Slides</li>}</ul>
      <Tags tags={tags} />
    </>
  );
};

Slide.propTypes = {
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
  url: PropTypes.string,
};

Slide.defaultProps = {
  authors: [],
  date: '',
  name: '',
  stats: null,
  tags: [],
  url: '',
};

export default Slide;
