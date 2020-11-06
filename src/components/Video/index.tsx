import React, { FC } from 'react';
import Media from '../Media';
import MediaBody from '../MediaBody';
import MediaObject from '../MediaObject';
import Tags, { TagsProps } from '../Tags';

interface Author {
  name: string;
  twitter?: string;
}

export interface VideoProps {
  authors: Author[];
  fields: {
    img: string;
    stats: {
      dislikes: number;
      likes: number;
      views: number;
    };
  };
  name: string;
  objectId: string;
  tags: TagsProps;
  vimeoId?: string;
  youtubeId?: string;
}

const Video: FC<VideoProps> = (props) => {
  const {
    authors,
    fields: { img, stats },
    name,
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

export default Video;
