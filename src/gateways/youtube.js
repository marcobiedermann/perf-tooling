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
        id,
        part: 'snippet,statistics',
      },
      (error, video) => {
        if (error) {
          reject(error);
        }

        resolve({
          img: video.items[0].snippet.thumbnails.medium.url,
          stats: {
            dislikes: parseInt(video.items[0].statistics.dislikeCount, 10),
            likes: parseInt(video.items[0].statistics.likeCount, 10),
            views: parseInt(video.items[0].statistics.viewCount, 10),
          },
        });
      },
    );
  });
}

module.exports = { getYoutubeVideo };
