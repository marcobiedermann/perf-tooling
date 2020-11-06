import classNames from 'classnames';
import React, { FC } from 'react';
import Article, { ArticleProps } from '../Article';
import styles from './style.module.css';

export interface ArticlesProps {
  articles: ArticleProps[];
  className?: string;
}

const Articles: FC<ArticlesProps> = (props) => {
  const { articles, className } = props;

  return (
    <ul className={classNames(className, styles.articles)}>
      {articles.map((article) => (
        <li key={article.id}>
          <Article {...article} />
        </li>
      ))}
    </ul>
  );
};

export default Articles;
