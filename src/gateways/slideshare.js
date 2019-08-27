/* eslint-disable import/prefer-default-export */

async function getSlideshareMeta(url) {
  const response = await fetch(`http://www.slideshare.net/api/oembed/2?url=${url}&format=json`);

  if (response.status !== 200) {
    throw new Error('Slide not found');
  }

  const result = await response.json();

  return {
    image: result.thumbnail_url,
  };
}

module.exports = { getSlideshareMeta };
