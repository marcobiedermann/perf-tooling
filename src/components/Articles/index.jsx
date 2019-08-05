import PropTypes from 'prop-types';
import React from 'react';
import Article from '../Article';

const Articles = props => {
  const { articles } = props;

  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <Article {...article} />
        </li>
      ))}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()),
};

Articles.defaultProps = {
  articles: [],
};

export default Articles;
