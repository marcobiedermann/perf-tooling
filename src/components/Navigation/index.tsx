import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import styles from './style.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps {
  className?: string;
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props) => {
  const { className, routes } = props;

  return (
    <nav className={classNames(className, styles.navigation)}>
      <ul className={styles.navigation__list}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={styles.navigation__link}
              activeClassName={styles.navigation__linkActive}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
