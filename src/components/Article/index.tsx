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

export interface ArticleProps {
  authors: Author[];
  date: string;
  id: string;
  name: string;
  stats: {
    length: number;
  };
  tags: string[];
  url: string;
}

const Article: FC<ArticleProps> = (props) => {
  const { authors, date, name, stats, tags, url } = props;

  return (
    <div>
      <Media>
        <MediaObject />
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
          {stats && <Stats stats={[`Length: ${stats.length} Words`]} />}
          <Tags tags={tags} />
        </MediaBody>
      </Media>
    </div>
  );
};

export default Article;
