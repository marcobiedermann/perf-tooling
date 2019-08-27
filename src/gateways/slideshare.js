/* eslint-disable import/prefer-default-export */

const axios = require('axios');

async function getSlideshareMeta(url) {
  const { data } = await axios.get(`http://www.slideshare.net/api/oembed/2?url=${url}&format=json`);

  return {
    image: data.thumbnail_url,
  };
}

module.exports = { getSlideshareMeta };
