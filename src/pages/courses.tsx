import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';
import SEO from '../components/SEO';

const CoursesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <Section>
        <Grid>
          <h1>List of performance courses</h1>
          <Search indexName="courses" />
        </Grid>
      </Section>
    </Layout>
  );
};

export default CoursesPage;
