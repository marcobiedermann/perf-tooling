const dotenv = require('dotenv');
const pkg = require('../../package.json');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = {
  repository: {
    url: pkg.repository.url,
  },
  algolia: {
    adminKey: process.env.ALGOLIA_ADMIN_KEY,
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  },
  github: {
    token: process.env.GITHUB_TOKEN,
  },
  twitter: {
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  },
  vimeo: {
    clientId: process.env.VIMEO_CLIENT_ID,
    clientSecret: process.env.VIMEO_CLIENT_SECRET,
    accessToken: process.env.VIMEO_ACCESS_TOKEN,
  },
  youtube: {
    apiKey: process.env.YOUTUBE_API_KEY,
  },
};

module.exports = config;
