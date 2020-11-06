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

export interface CourseProps {
  authors: Author[];
  date: string;
  img: {
    childImageSharp: GatsbyImageFixedProps;
  };
  isPaid: boolean;
  name: string;
  objectId: string;
  stats: {
    estimatedTime: number;
    level: number;
  };
  tags: string[];
  url: string;
}

const Course: FC<CourseProps> = (props) => {
  const { authors, date, img, isPaid, name, stats, tags, url } = props;

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
            <a href={url}>
              {name}
              {isPaid && <small>(Paid)</small>}
            </a>
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
          <Stats stats={[`Length: ${stats.estimatedTime}`, `Level: ${stats.level}`]} />
          <Tags tags={tags} />
        </MediaBody>
      </Media>
    </div>
  );
};

export default Course;
