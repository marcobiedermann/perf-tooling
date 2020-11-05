/* eslint-disable import/prefer-default-export */

const Twit = require('twit');
const config = require('../config');

const twit = new Twit({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret,
});

async function getTwitterUser(id) {
  const { data } = await twit.get('/users/show/:id', {
    id,
  });

  return {
    description: data.description,
    img: data.profile_image_url,
    stats: {
      followers: data.followers_count,
    },
  };
}

module.exports = { getTwitterUser };
