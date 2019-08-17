import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Videos from '../components/Videos';

const VideosPage = () => {
  const { allVideosJson } = useStaticQuery(
    graphql`
      query {
        allVideosJson {
          edges {
            node {
              authors {
                name
                twitter
              }
              id
              name
              tags
              vimeoId
              youtubeId
            }
          }
        }
      }
    `,
  );

  const videos = allVideosJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Videos" />
      <Section>
        <Grid>
          <h1>Videos</h1>
          <Videos videos={videos} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default VideosPage;
