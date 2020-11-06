import React, { FC } from 'react';
import Media from '../Media';
import MediaBody from '../MediaBody';
import MediaObject from '../MediaObject';
import Stats from '../Stats';
import Tags from '../Tags';

interface Author {
  name: string;
  twitter?: string;
}

export interface SlideProps {
  authors: Author[];
  date: string;
  fields: {
    img: string;
  };
  name: string;
  objectId: string;
  stats: {
    length: number;
  };
  tags: string[];
  url: string;
}

const Slide: FC<SlideProps> = (props) => {
  const { authors, date, fields, name, stats, tags, url } = props;

  return (
    <div>
      <Media>
        {fields && fields.img && (
          <MediaObject>
            <figure>
              <img src={fields.img} width="170" height="127" />
            </figure>
          </MediaObject>
        )}
        <MediaBody>
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
          <Stats stats={[`Length: ${stats.length} Slides`]} />
          <Tags tags={tags} />
        </MediaBody>
      </Media>
    </div>
  );
};

export default Slide;
