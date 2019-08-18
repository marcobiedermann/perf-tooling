import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const VideosPage = () => {
  return (
    <Layout>
      <SEO title="Videos" />
      <Section>
        <Grid>
          <h1>List of performance videos</h1>
          <Search indexName="videos" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default VideosPage;
