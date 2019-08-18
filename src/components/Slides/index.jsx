import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Slide from '../Slide';
import styles from './style.module.css';

const Slides = props => {
  const { className, slides } = props;

  return (
    <ul className={classNames(className, styles.slides)}>
      {slides.map(slide => (
        <li key={slide.objectId}>
          <Slide {...slide} />
        </li>
      ))}
    </ul>
  );
};

Slides.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.shape()),
};

Slides.defaultProps = {
  className: '',
  slides: [],
};

export default Slides;
