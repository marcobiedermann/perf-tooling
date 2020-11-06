import classNames from 'classnames';
import React, { FC } from 'react';
import Course, { CourseProps } from '../Course';
import styles from './style.module.css';

export interface CoursesProps {
  className?: string;
  courses: CourseProps[];
}

const Courses: FC<CoursesProps> = (props) => {
  const { className, courses } = props;

  return (
    <ul className={classNames(className, styles.courses)}>
      {courses.map((course) => (
        <li key={course.objectId}>
          <Course {...course} />
        </li>
      ))}
    </ul>
  );
};

export default Courses;
