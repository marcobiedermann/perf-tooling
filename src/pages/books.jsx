import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Books from '../components/Books';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const BooksPage = () => {
  const { allBooksJson } = useStaticQuery(
    graphql`
      query {
        allBooksJson(sort: { fields: date, order: DESC }) {
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
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
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
      <Section>
        <Grid>
          <h1>Books</h1>
          <Books books={books} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default BooksPage;
