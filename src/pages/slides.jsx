import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const SlidesPage = () => {
  return (
    <Layout>
      <SEO title="Slides" />
      <Section>
        <Grid>
          <h1>Slides</h1>
          <Search indexName="slides" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default SlidesPage;
