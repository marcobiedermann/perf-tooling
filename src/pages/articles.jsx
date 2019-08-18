import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Articles from '../components/Articles';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const ArticlesPage = () => {
  const { allArticlesJson } = useStaticQuery(
    graphql`
      query {
        allArticlesJson(sort: { fields: date, order: DESC }) {
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

  const articles = allArticlesJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Articles" />
      <Section>
        <Grid>
          <h1>Articles</h1>
          <Articles articles={articles} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
