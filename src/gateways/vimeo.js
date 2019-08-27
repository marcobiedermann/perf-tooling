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
      (error, body) => {
        if (error) {
          reject(error);
        }

        resolve(body);
      },
    );
  });
}

export { getVimeoVideo };
