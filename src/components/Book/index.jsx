import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Book = props => {
  const { authors, date, description, img, name, stats, tags, url } = props;

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
      <p>{description}</p>
      <figure>
        {img && <img src={`images/courses/${img.src.filename}.jpg`} alt={name} width={img.width} height={img.height} />}
      </figure>
      <ul>{stats && stats.length && <li>Length: {stats.length} Pages</li>}</ul>
      <Tags tags={tags} />
    </>
  );
};

Book.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      twitter: PropTypes.string,
    }),
  ),
  date: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.shape({
    height: PropTypes.number,
    src: PropTypes.shape({
      filename: PropTypes.string,
    }),
    width: PropTypes.number,
  }),
  name: PropTypes.string,
  stats: PropTypes.shape({
    length: PropTypes.number,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

Book.defaultProps = {
  authors: [],
  date: '',
  description: '',
  img: null,
  name: '',
  stats: null,
  tags: [],
  url: '',
};

export default Book;
