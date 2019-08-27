/* eslint-disable import/prefer-default-export */

const axios = require('axios');

async function getSpeakerdeckMeta(url) {
  const { data } = await axios.get(`https://speakerdeck.com/oembed.json?url=${url}`);
  const id = /speakerdeck.com\/player\/(.*?)"/g.exec(data.html)[1];

  return {
    image: `https://speakerd.s3.amazonaws.com/presentations/${id}/thumb_slide_0.jpg`,
  };
}

module.exports = { getSpeakerdeckMeta };
