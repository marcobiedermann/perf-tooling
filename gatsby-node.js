const crypto = require('crypto');
const fetch = require('node-fetch');
const parseGithubUrl = require('parse-github-url');
const pkg = require('./package.json');

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
