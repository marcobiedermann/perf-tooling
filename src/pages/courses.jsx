import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Courses from '../components/Courses';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const CoursesPage = () => {
  const { allCoursesJson } = useStaticQuery(
    graphql`
      query {
        allCoursesJson {
          edges {
            node {
              authors {
                name
                twitter
              }
              date
              id
              img {
                childImageSharp {
                  fixed(width: 277) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
              isPaid
              name
              stats {
                estimatedTime
                level
              }
              tags
              url
            }
          }
        }
      }
    `,
  );

  const courses = allCoursesJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Articles" />
      <Section>
        <Grid>
          <h1>Articles</h1>
          <Courses courses={courses} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default CoursesPage;
