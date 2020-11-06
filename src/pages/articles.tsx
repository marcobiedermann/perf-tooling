import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const ArticlesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <Section>
        <Grid>
          <h1>List of performance articles</h1>
          <Search indexName="articles" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
