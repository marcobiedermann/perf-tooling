/* eslint-disable import/prefer-default-export */

async function getSpeakerdeckMeta(url) {
  const response = await fetch(`https://speakerdeck.com/oembed.json?url=${url}`);

  if (response.status !== 200) {
    throw new Error('Slide not found');
  }

  const result = await response.json();

  const { html } = result;
  const id = /speakerdeck.com\/player\/(.*?)"/g.exec(html)[1];

  return {
    image: `https://speakerd.s3.amazonaws.com/presentations/${id}/thumb_slide_0.jpg`,
  };
}

module.exports = { getSpeakerdeckMeta };
