const { createContentDigest } = require('gatsby-core-utils');
const { GraphQLClient } = require('graphql-request');
const isGithubUrl = require('is-github-url');
const merge = require('lodash/merge');
const fetch = require('node-fetch');
const parseGithubUrl = require('parse-github-url');
const Twit = require('twit');
const { Vimeo } = require('vimeo');
const youtubeApi = require('youtube-api');
const pkg = require('./package.json');
const config = require('./src/config');

const githubApiClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${config.github.token}`,
  },
});

const twit = new Twit({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret,
});

const vimeo = new Vimeo(config.vimeo.clientId, config.vimeo.clientSecret, config.vimeo.accessToken);

youtubeApi.authenticate({
  key: config.youtube.apiKey,
  type: 'key',
});

async function getRepositoryStars(url) {
  const { name, owner } = parseGithubUrl(url);

  const result = await githubApiClient.request(`
    query {
      repository(name: "${name}", owner: "${owner}") {
        stargazers {
          totalCount
        }
      }
    }
  `);

  const { totalCount: stars } = result.repository.stargazers;

  return stars;
}

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

async function getTwitterUser(id) {
  const { data } = await twit.get('/users/show/:id', {
    id,
  });

  const defaults = {
    description: '',
    followers: 0,
    image: '',
  };

  const options = {
    description: data.description,
    followers: data.followers_count,
    image: data.profile_image_url,
  };

  return merge({}, defaults, options);
}

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

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;

  const nodeTypes = ['ArticlesJson', 'AuditsJson', 'BooksJson', 'CoursesJson', 'SlidesJson', 'VideosJson'];

  if (nodeTypes.includes(node.internal.type)) {
    const { authors } = node;

    const twitterUsers = await Promise.all(
      authors
        .filter(author => author.twitter)
        .map(author => {
          const { twitter: id } = author;

          return getTwitterUser(id);
        }),
    );

    createNodeField({
      name: 'twitterUsers',
      node,
      value: twitterUsers,
    });
  }

  if (node.internal.type === 'SlidesJson') {
    const { url } = node;

    const isSlideshareUrl = url.match(/slideshare/g);
    const isSpeakerdeckUrl = url.match(/speakerdeck/g);

    if (isSlideshareUrl) {
      try {
        const slideMeta = await getSlideshareMeta(url);

        createNodeField({
          name: 'slideMeta',
          node,
          value: slideMeta,
        });
      } catch (error) {
        console.error(error, { node });
      }
    }

    if (isSpeakerdeckUrl) {
      try {
        const slideMeta = await getSpeakerdeckMeta(url);

        createNodeField({
          name: 'slideMeta',
          node,
          value: slideMeta,
        });
      } catch (error) {
        console.error(error, { node });
      }
    }
  }

  if (node.internal.type === 'ToolsJson') {
    const { resources } = node;

    await Promise.all(
      Object.keys(resources).map(async key => {
        const resource = resources[key];

        if (!isGithubUrl(resource.url)) {
          return;
        }

        try {
          const stars = await getRepositoryStars(resource.url);

          createNodeField({
            name: `${key}Stars`,
            node,
            value: stars,
          });
        } catch (error) {
          console.error(error);
        }
      }),
    );
  }

  if (node.internal.type === 'VideosJson') {
    const { vimeoId, youtubeId } = node;

    if (vimeoId) {
      const video = await getVimeoVideo(vimeoId);

      createNodeField({
        name: 'video',
        node,
        value: video,
      });
    }

    if (youtubeId) {
      const video = await getYoutubeVideo(youtubeId);

      createNodeField({
        name: 'video',
        node,
        value: video,
      });
    }
  }
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const { name, owner } = parseGithubUrl(pkg.repository.url);

  const response = await fetch(`https://api.github.com/repos/${owner}/${name}/contributors`);
  const result = await response.json();

  result.forEach(user => {
    const contributorNode = {
      ...user,
      avatar_url: `${user.avatar_url}&s=40`,
      id: `${user.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Contributors`,
      },
      children: [],
    };

    const contentDigest = createContentDigest(contributorNode);

    contributorNode.internal.contentDigest = contentDigest;

    createNode(contributorNode);
  });
};
