import PropTypes from 'prop-types';
import React from 'react';
import Book from '../Book';

const Books = props => {
  const { books } = props;

  return (
    <ul>
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
};

Books.defaultProps = {
  books: [],
};

export default Books;
