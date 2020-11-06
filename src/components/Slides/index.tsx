import classNames from 'classnames';
import React, { FC } from 'react';
import Slide, { SlideProps } from '../Slide';
import styles from './style.module.css';

export interface SlidesProps {
  className?: string;
  slides: SlideProps[];
}

const Slides: FC<SlidesProps> = (props) => {
  const { className, slides } = props;

  return (
    <ul className={classNames(className, styles.slides)}>
      {slides.map((slide) => (
        <li key={slide.objectId}>
          <Slide {...slide} />
        </li>
      ))}
    </ul>
  );
};

export default Slides;
