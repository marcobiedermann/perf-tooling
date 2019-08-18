import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Book from '../Book';
import styles from './style.module.css';

const Books = props => {
  const { books, className } = props;

  return (
    <ul className={classNames(className, styles.books)}>
      {books.map(book => (
        <li key={book.id}>
          <Book {...book} />
        </li>
      ))}
    </ul>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()),
  className: PropTypes.string,
};

Books.defaultProps = {
  books: [],
  className: '',
};

export default Books;
