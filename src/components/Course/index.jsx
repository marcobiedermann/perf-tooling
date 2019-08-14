import Img from 'gatsby-image';
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
        <Img fixed={img.childImageSharp.fixed} />
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
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.shape(),
    }),
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
