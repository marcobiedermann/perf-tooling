import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import * as routes from '../../constants/routes';
import Navigation from '../Navigation';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation
        routes={[
          routes.INDEX,
          routes.TOOLS,
          routes.ARTICLES,
          routes.VIDEOS,
          routes.SLIDES,
          routes.BOOKS,
          routes.COURSES,
          routes.AUDITS,
        ]}
      />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
