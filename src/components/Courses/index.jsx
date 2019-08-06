import PropTypes from 'prop-types';
import React from 'react';
import Course from '../Course';

const Courses = props => {
  const { courses } = props;

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Course {...course} />
        </li>
      ))}
    </ul>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape()),
};

Courses.defaultProps = {
  courses: [],
};

export default Courses;
