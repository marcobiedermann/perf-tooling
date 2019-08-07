import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Audits from '../components/Audits';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AuditsPage = () => {
  const { allAuditsJson } = useStaticQuery(
    graphql`
      query {
        allAuditsJson {
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
      <h1>Audits</h1>
      <Audits audits={audits} />
    </Layout>
  );
};

export default AuditsPage;
