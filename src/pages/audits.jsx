import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const AuditsPage = () => {
  return (
    <Layout>
      <SEO title="Audits" />
      <Section>
        <Grid>
          <h1>List of performance audits</h1>
          <Search indexName="audits" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default AuditsPage;
