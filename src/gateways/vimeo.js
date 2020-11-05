/* eslint-disable import/prefer-default-export */

const { Vimeo } = require('vimeo');
const config = require('../config');

const vimeo = new Vimeo(config.vimeo.clientId, config.vimeo.clientSecret, config.vimeo.accessToken);

function getVimeoVideo(id) {
  return new Promise((resolve, reject) => {
    vimeo.request(
      {
        path: `/videos/${id}`,
      },
      (error, video) => {
        if (error) {
          reject(error);
        }

        resolve({
          img: video.pictures.sizes[2].link,
          stats: {
            likes: video.metadata.connections.likes.total,
            views: video.stats.plays,
          },
        });
      },
    );
  });
}

module.exports = { getVimeoVideo };
