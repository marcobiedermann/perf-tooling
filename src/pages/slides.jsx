import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Slides from '../components/Slides';

const SlidesPage = () => {
  const { allSlidesJson } = useStaticQuery(
    graphql`
      query {
        allSlidesJson {
          edges {
            node {
              authors {
                name
                twitter
              }
              date
              id
              name
              stats {
                length
              }
              tags
              url
            }
          }
        }
      }
    `,
  );

  const slides = allSlidesJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Slides" />
      <h1>Slides</h1>
      <Slides slides={slides} />
    </Layout>
  );
};

export default SlidesPage;
