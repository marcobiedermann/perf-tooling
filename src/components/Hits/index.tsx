import React from 'react';
import Articles from '../Articles';
import Audits from '../Audits';
import Books from '../Books';
import Courses from '../Courses';
import Slides from '../Slides';
import Tools from '../Tools';
import Videos from '../Videos';

export interface HitsProps {
  hits: any;
  indexName: string;
}

const Hits = (props) => {
  const { hits, indexName } = props;

  switch (indexName) {
    case 'articles':
      return <Articles articles={hits} />;

    case 'audits':
      return <Audits audits={hits} />;

    case 'books':
      return <Books books={hits} />;

    case 'courses':
      return <Courses courses={hits} />;

    case 'slides':
      return <Slides slides={hits} />;

    case 'tools':
      return <Tools tools={hits} />;

    case 'videos':
      return <Videos videos={hits} />;

    default:
      return <p>No results found</p>;
  }
};

export default Hits;
