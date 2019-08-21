const crypto = require('crypto');
const dotenv = require('dotenv');
const merge = require('lodash/merge');
const fetch = require('node-fetch');
const parseGithubUrl = require('parse-github-url');
const Twit = require('twit');
const pkg = require('./package.json');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const twit = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

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

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(contributorNode))
      .digest(`hex`);

    contributorNode.internal.contentDigest = contentDigest;

    createNode(contributorNode);
  });
};
