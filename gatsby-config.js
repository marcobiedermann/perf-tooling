const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Performance Tooling Today',
    description:
      'Perf Tooling Today lists a lot of tools, articles, videos, slides and courses to make the web faster. We cover resources to automize and monitore your workflow.',
    author: '@stefanjudis',
    siteUrl: 'http://www.perf-tooling.today',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/icons/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${config.github.token}`,
        },
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.jpg',
        name: 'gatsby-starter-default',
        short_name: 'perf-tooling',
        start_url: '/',
        theme_color: '#01a5b1',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
