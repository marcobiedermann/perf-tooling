import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Video = props => {
  const { authors, name, tags, vimeoId, youtubeId } = props;

  return (
    <>
      <h3>
        {vimeoId && <a href={`https://vimeo.com/${vimeoId}`}>{name}</a>}
        {youtubeId && <a href={`https://youtube.com/watch?${youtubeId}`}>{name}</a>}
      </h3>
      <h4>
        by{' '}
        {authors.map(author => (
          <>{author.twitter ? <a href={`https://twitter.com/${author.twitter}`}>{author.name}</a> : author.name}</>
        ))}
      </h4>
      <figure>
        {youtubeId && (
          <a href={`https://youtube.com/watch?${youtubeId}`}>
            <img src={`https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`} alt={name} />
          </a>
        )}
      </figure>
      <Tags tags={tags} />
    </>
  );
};

Video.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      twitter: PropTypes.string,
    }),
  ),
  name: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  vimeoId: PropTypes.string,
  youtubeId: PropTypes.string,
};

Video.defaultProps = {
  authors: [],
  name: '',
  tags: [],
  vimeoId: '',
  youtubeId: '',
};

export default Video;
