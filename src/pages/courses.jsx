import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const CoursesPage = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <Section>
        <Grid>
          <h1>Articles</h1>
          <Search indexName="courses" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default CoursesPage;
