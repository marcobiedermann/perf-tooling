import classNames from 'classnames';
import React, { FC } from 'react';
import Book, { BookProps } from '../Book';
import styles from './style.module.css';

export interface BooksProps {
  books: BookProps[];
  className?: string;
}

const Books: FC<BooksProps> = (props) => {
  const { books, className } = props;

  return (
    <ul className={classNames(className, styles.books)}>
      {books.map((book) => (
        <li key={book.objectId}>
          <Book {...book} />
        </li>
      ))}
    </ul>
  );
};

export default Books;
