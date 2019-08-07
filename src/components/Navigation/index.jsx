import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = props => {
  const { routes } = props;

  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf({
    name: PropTypes.string,
    path: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  routes: [],
};

export default Navigation;
