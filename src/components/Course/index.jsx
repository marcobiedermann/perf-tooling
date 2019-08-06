import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Course = props => {
  const { authors, date, img, isPaid, name, stats, tags, url } = props;

  return (
    <>
      <h3>
        <a href={url}>
          {name}
          {isPaid && <small>(Paid)</small>}
        </a>
      </h3>
      <h4>
        {date} by{' '}
        {authors.map(author => (
          <>{author.twitter ? <a href={`https://twitter.com/${author.twitter}`}>{author.name}</a> : author.name}</>
        ))}
      </h4>
      <figure>
        {img && <img src={`images/courses/${img.src.filename}.jpg`} alt={name} width={img.width} height={img.height} />}
      </figure>
      <ul>
        {stats && stats.estimatedTime && <li>Length: {stats.estimatedTime}</li>}
        {stats && stats.level && <li>Level: {stats.level}</li>}
      </ul>
      <Tags tags={tags} />
    </>
  );
};

Course.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      twitter: PropTypes.string,
    }),
  ),
  date: PropTypes.string,
  img: PropTypes.shape({
    height: PropTypes.number,
    src: PropTypes.shape({
      filename: PropTypes.string,
    }),
    width: PropTypes.number,
  }),
  isPaid: PropTypes.bool,
  name: PropTypes.string,
  stats: PropTypes.shape({
    estimatedTime: PropTypes.string,
    level: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

Course.defaultProps = {
  authors: [],
  date: '',
  img: null,
  isPaid: false,
  name: '',
  stats: null,
  tags: [],
  url: '',
};

export default Course;
