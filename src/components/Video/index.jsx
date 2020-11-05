import PropTypes from 'prop-types';
import React from 'react';
import Media from '../Media';
import MediaBody from '../MediaBody';
import MediaObject from '../MediaObject';
import Tags from '../Tags';

const Video = props => {
  const {
    authors,
    name,
    fields: { img, stats },
    tags,
    vimeoId,
    youtubeId,
  } = props;

  return (
    <div>
      <Media>
        <MediaObject>
          <figure>
            {vimeoId && (
              <a href={`https://vimeo.com/${vimeoId}`}>
                <img src={img} alt={name} width="295" height="166" />
              </a>
            )}
            {youtubeId && (
              <a href={`https://youtube.com/watch?${youtubeId}`}>
                <img src={img} alt={name} width="295" height="166" />
              </a>
            )}
          </figure>
        </MediaObject>
        <MediaBody>
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
          {stats && (
            <ul>
              {stats.views && <li>Views: {stats.views}</li>}
              {stats.likes && <li>Likes: {stats.likes}</li>}
              {stats.dislikes && <li>Dislikes: {stats.dislikes}</li>}
            </ul>
          )}
          <Tags tags={tags} />
        </MediaBody>
      </Media>
    </div>
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
