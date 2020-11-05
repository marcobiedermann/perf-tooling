/* eslint-disable import/prefer-default-export */

const axios = require('axios');

async function getSpeakerdeckSlide(url) {
  const { data } = await axios.get(`https://speakerdeck.com/oembed.json?url=${url}`);
  const id = /speakerdeck.com\/player\/(.*?)"/g.exec(data.html)[1];
  const img = `https://speakerd.s3.amazonaws.com/presentations/${id}/thumb_slide_0.jpg`;

  return {
    img,
  };
}

module.exports = { getSpeakerdeckSlide };
