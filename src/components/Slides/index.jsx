import PropTypes from 'prop-types';
import React from 'react';
import Slide from '../Slide';

const Slides = props => {
  const { slides } = props;

  return (
    <ul>
      {slides.map(slide => (
        <li key={slide.id}>
          <Slide {...slide} />
        </li>
      ))}
    </ul>
  );
};

Slides.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape()),
};

Slides.defaultProps = {
  slides: [],
};

export default Slides;
