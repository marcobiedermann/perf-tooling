import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Articles from '../components/Articles';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ArticlesPage = () => {
  const { allArticlesJson } = useStaticQuery(
    graphql`
      query {
        allArticlesJson {
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
      <h1>Articles</h1>
      <Articles articles={articles} />
    </Layout>
  );
};

export default ArticlesPage;
