import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Audits from '../components/Audits';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const AuditsPage = () => {
  const { allAuditsJson } = useStaticQuery(
    graphql`
      query {
        allAuditsJson(sort: { fields: date, order: DESC }) {
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
              targets
              types
              url
            }
          }
        }
      }
    `,
  );

  const audits = allAuditsJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Audits" />
      <Section>
        <Grid>
          <h1>Audits</h1>
          <Audits audits={audits} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AuditsPage;
