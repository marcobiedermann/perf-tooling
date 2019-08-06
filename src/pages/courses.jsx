import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Courses from '../components/Courses';
import Layout from '../components/Layout';
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
                height
                src {
                  filename
                }
                width
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
      <h1>Articles</h1>
      <Courses courses={courses} />
    </Layout>
  );
};

export default CoursesPage;
