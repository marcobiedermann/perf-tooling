import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import * as routes from '../../constants/routes';
import LoveIcon from '../../images/icons/heart.svg';
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
        <Grid>
          <h1>
            <Link to="/">
              <img src="images/perf-tooling.svg" alt={data.site.siteMetadata.title} width="64" height="43" />
            </Link>
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
        </Grid>
      </Header>
      <div>
        <Main>{children}</Main>
        <Footer>
          <Grid>
            <p>
              Handcrafted with <LoveIcon width="1.5em" height="1.5em" fill="#ff4136" /> in Germany
            </p>
            <p>The Perf Tooling Team</p>
          </Grid>
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
