import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const SlidesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Slides" />
      <Section>
        <Grid>
          <h1>List of performance slides</h1>
          <Search indexName="slides" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default SlidesPage;
