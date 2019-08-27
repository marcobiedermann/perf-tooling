/* eslint-disable import/prefer-default-export */

const { GraphQLClient } = require('graphql-request');
const parseGithubUrl = require('parse-github-url');
const config = require('../config');

const githubApiClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${config.github.token}`,
  },
});

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

  return repository.stargazers.totalCount;
}

module.exports = { getRepositoryStars };
