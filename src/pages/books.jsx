import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Books from '../components/Books';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BooksPage = () => {
  const { allBooksJson } = useStaticQuery(
    graphql`
      query {
        allBooksJson {
          edges {
            node {
              authors {
                name
                twitter
              }
              date
              description
              id
              img {
                height
                src {
                  filename
                  types
                }
                width
              }
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

  const books = allBooksJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Books" />
      <h1>Books</h1>
      <Books books={books} />
    </Layout>
  );
};

export default BooksPage;
