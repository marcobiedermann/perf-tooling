/* eslint-disable import/prefer-default-export */

const youtubeApi = require('youtube-api');
const config = require('../config');

youtubeApi.authenticate({
  key: config.youtube.apiKey,
  type: 'key',
});

function getYoutubeVideo(id) {
  return new Promise((resolve, reject) => {
    youtubeApi.videos.list(
      {
        part: 'snippet,statistics',
        id,
      },
      (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      },
    );
  });
}

export { getYoutubeVideo };
