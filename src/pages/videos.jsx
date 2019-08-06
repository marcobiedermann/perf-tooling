import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
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
      <h1>Videos</h1>
      <Videos videos={videos} />
    </Layout>
  );
};

export default VideosPage;
