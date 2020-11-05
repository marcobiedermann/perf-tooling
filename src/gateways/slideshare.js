/* eslint-disable import/prefer-default-export */

const axios = require('axios');

async function getSlideshareSlide(url) {
  const { data } = await axios.get(`http://www.slideshare.net/api/oembed/2?url=${url}&format=json`);
  const img = data.thumbnail_url;

  return {
    img,
  };
}

module.exports = { getSlideshareSlide };
