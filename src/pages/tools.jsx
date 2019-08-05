import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tools from '../components/Tools';

const ToolsPage = () => {
  const { allToolsJson } = useStaticQuery(
    graphql`
      query {
        allToolsJson {
          edges {
            node {
              description
              angular {
                url
              }
              apache {
                url
              }
              bookmarklet {
                url
              }
              broccoli {
                url
              }
              chrome {
                url
              }
              cli {
                url
              }
              firefox {
                url
              }
              googleAppsScript {
                url
              }
              grunt {
                url
              }
              gulp {
                url
              }
              id
              illustrator {
                url
              }
              java {
                url
              }
              javascript {
                url
              }
              linux {
                url
              }
              mac {
                url
              }
              module {
                url
              }
              name
              nginx {
                url
              }
              node {
                url
              }
              php {
                url
              }
              python {
                url
              }
              ruby {
                url
              }
              service {
                isPaid
                url
              }
              tags
              windows {
                url
              }
              wordpress {
                url
              }
            }
          }
        }
      }
    `,
  );

  const tools = allToolsJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO title="Tools" />
      <h1>Tools</h1>
      <Tools tools={tools} />
    </Layout>
  );
};

export default ToolsPage;
