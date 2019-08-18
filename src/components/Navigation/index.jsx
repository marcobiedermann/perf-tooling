import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Navigation = props => {
  const { className, routes } = props;

  return (
    <nav className={classNames(className, styles.navigation)}>
      <ul className={styles.navigation__list}>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path} className={styles.navigation__link} activeClassName={styles.navigation__linkActive}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  className: '',
  routes: [],
};

export default Navigation;
