import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Course from '../Course';
import styles from './style.module.css';

const Courses = props => {
  const { className, courses } = props;

  return (
    <ul className={classNames(className, styles.courses)}>
      {courses.map(course => (
        <li key={course.objectId}>
          <Course {...course} />
        </li>
      ))}
    </ul>
  );
};

Courses.propTypes = {
  className: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.shape()),
};

Courses.defaultProps = {
  className: '',
  courses: [],
};

export default Courses;
