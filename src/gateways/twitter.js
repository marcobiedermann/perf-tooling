/* eslint-disable import/prefer-default-export */

const merge = require('lodash/merge');
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

  const defaults = {
    description: '',
    followers: 0,
    image: '',
  };

  const options = {
    description: data.description,
    followers: data.followers_count,
    image: data.profile_image_url,
  };

  return merge({}, defaults, options);
}

module.exports = { getTwitterUser };
