import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const ToolsPage = () => {
  return (
    <Layout>
      <SEO title="Tools" />
      <Section>
        <Grid>
          <h1>List of performance tools</h1>
          <Search indexName="tools" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default ToolsPage;
