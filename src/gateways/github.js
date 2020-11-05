/* eslint-disable import/prefer-default-export */

const axios = require('axios');
const { GraphQLClient } = require('graphql-request');
const parseGithubUrl = require('parse-github-url');
const config = require('../config');

const githubApiClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${config.github.token}`,
  },
});

async function getRepositoryContributors(url) {
  const { name, owner } = parseGithubUrl(url);

  const { data } = await axios.get(`https://api.github.com/repos/${owner}/${name}/contributors`);

  return data;
}

async function getRepositoryStars(url) {
  const { name, owner } = parseGithubUrl(url);

  const { repository } = await githubApiClient.request(`
    query {
      repository(name: "${name}", owner: "${owner}") {
        stargazers {
          totalCount
        }
      }
    }
  `);

  return {
    stats: {
      stars: repository.stargazers.totalCount,
    },
  };
}

module.exports = { getRepositoryContributors, getRepositoryStars };
