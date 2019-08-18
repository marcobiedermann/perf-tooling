import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Slides from '../components/Slides';

const SlidesPage = () => {
  const { allSlidesJson } = useStaticQuery(
    graphql`
      query {
        allSlidesJson(sort: { fields: date, order: DESC }) {
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
      <Section>
        <Grid>
          <h1>Slides</h1>
          <Search indexName="slides" />
          <Slides slides={slides} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default SlidesPage;
