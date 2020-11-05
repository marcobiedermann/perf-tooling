import PropTypes from 'prop-types';
import React from 'react';
import Media from '../Media';
import MediaBody from '../MediaBody';
import MediaObject from '../MediaObject';
import Tags from '../Tags';

const Slide = props => {
  const { authors, date, fields, name, stats, tags, url } = props;

  return (
    <div>
      <Media>
        {fields && fields.img && (
          <MediaObject>
            <figure>
              <img src={fields.img} width="170" heoght="127" />
            </figure>
          </MediaObject>
        )}
        <MediaBody>
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
        </MediaBody>
      </Media>
    </div>
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
  fields: PropTypes.shape({
    img: PropTypes.string,
  }),
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
  fields: null,
  name: '',
  stats: null,
  tags: [],
  url: '',
};

export default Slide;
