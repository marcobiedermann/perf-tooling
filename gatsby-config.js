const config = require('./src/config');
const { getArticles } = require('./src/graphql/articles');
const { getAudits } = require('./src/graphql/audits');
const { getBooks } = require('./src/graphql/books');
const { getCourses } = require('./src/graphql/courses');
const { getSlides } = require('./src/graphql/slides');
const { getTools } = require('./src/graphql/tools');
const { getVideos } = require('./src/graphql/videos');

const mapper = arr => arr.map(({ node }) => node);

const queries = [
  {
    indexName: 'articles',
    query: getArticles,
    transformer: ({ data }) => mapper(data.articles.edges),
  },
  {
    indexName: 'audits',
    query: getAudits,
    transformer: ({ data }) => mapper(data.audits.edges),
  },
  {
    indexName: 'books',
    query: getBooks,
    transformer: ({ data }) => mapper(data.books.edges),
  },
  {
    indexName: 'courses',
    query: getCourses,
    transformer: ({ data }) => mapper(data.courses.edges),
  },
  {
    indexName: 'slides',
    query: getSlides,
    transformer: ({ data }) => mapper(data.slides.edges),
  },
  {
    indexName: 'tools',
    query: getTools,
    transformer: ({ data }) => mapper(data.tools.edges),
  },
  {
    indexName: 'videos',
    query: getVideos,
    transformer: ({ data }) => mapper(data.videos.edges),
  },
];

module.exports = {
  siteMetadata: {
    title: 'Performance Tooling Today',
    description:
      'Perf Tooling Today lists a lot of tools, articles, videos, slides and courses to make the web faster. We cover resources to automize and monitore your workflow.',
    author: '@stefanjudis',
    siteUrl: 'http://www.perf-tooling.today',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: config.algolia.appId,
        apiKey: config.algolia.adminKey,
        queries,
      },
    },
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
