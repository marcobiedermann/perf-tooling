import Img, { GatsbyImageFixedProps } from 'gatsby-image';
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

export interface BookProps {
  authors: Author[];
  date: string;
  description: string;
  img: {
    childImageSharp: GatsbyImageFixedProps;
  };
  name: string;
  objectId: string;
  stats: {
    length: number;
  };
  tags: string[];
  url: string;
}

const Book: FC<BookProps> = (props) => {
  const { authors, date, description, img, name, stats, tags, url } = props;

  return (
    <div>
      <Media>
        <MediaObject>
          <figure>
            <Img fixed={img.childImageSharp.fixed} />
          </figure>
        </MediaObject>
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
          <p>{description}</p>
          <Stats stats={[`Length: ${stats.length} Pages`]} />
          <Tags tags={tags} />
        </MediaBody>
      </Media>
    </div>
  );
};

export default Book;
