import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import * as routes from '../../constants/routes';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
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
      </Header>
      <div>
        <Main>
          <Grid>{children}</Grid>
        </Main>
        <Footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
