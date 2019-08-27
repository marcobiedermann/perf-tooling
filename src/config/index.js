const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = {
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
