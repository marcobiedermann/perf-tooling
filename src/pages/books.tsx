import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const BooksPage: FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Section>
        <Grid>
          <h1>List of performance books</h1>
          <Search indexName="books" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default BooksPage;
