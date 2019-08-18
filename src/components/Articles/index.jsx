import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Article from '../Article';
import styles from './style.module.css';

const Articles = props => {
  const { articles, className } = props;

  return (
    <ul className={classNames(className, styles.articles)}>
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
  className: PropTypes.string,
};

Articles.defaultProps = {
  articles: [],
  className: '',
};

export default Articles;
