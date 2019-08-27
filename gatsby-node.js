const { createContentDigest } = require('gatsby-core-utils');
const isGithubUrl = require('is-github-url');
const config = require('./src/config');
const { getRepositoryContributors, getRepositoryStars } = require('./src/gateways/github');
const { getSlideshareMeta } = require('./src/gateways/slideshare');
const { getSpeakerdeckMeta } = require('./src/gateways/speakerdeck');
const { getTwitterUser } = require('./src/gateways/twitter');
const { getVimeoVideo } = require('./src/gateways/vimeo');
const { getYoutubeVideo } = require('./src/gateways/youtube');

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;
  const nodeType = node.internal.type;
  const nodeTypes = ['ArticlesJson', 'AuditsJson', 'BooksJson', 'CoursesJson', 'SlidesJson', 'VideosJson'];

  if (nodeTypes.includes(nodeType)) {
    const { authors } = node;

    try {
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
    } catch (error) {
      console.error(error.message, { node });
    }
  }

  if (nodeType === 'SlidesJson') {
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
        console.error(error.message, { node });
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
        console.error(error.message, { node });
      }
    }
  }

  if (nodeType === 'ToolsJson') {
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
          console.error(error.message, { node });
        }
      }),
    );
  }

  if (nodeType === 'VideosJson') {
    const { vimeoId, youtubeId } = node;

    if (vimeoId) {
      try {
        const video = await getVimeoVideo(vimeoId);

        createNodeField({
          name: 'video',
          node,
          value: video,
        });
      } catch (error) {
        console.log(error.message, { node });
      }
    }

    if (youtubeId) {
      try {
        const video = await getYoutubeVideo(youtubeId);

        createNodeField({
          name: 'video',
          node,
          value: video,
        });
      } catch (error) {
        console.error(error.message, { node });
      }
    }
  }
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  try {
    const contributors = await getRepositoryContributors(config.repository.url);

    contributors.forEach(contributor => {
      const contributorNode = {
        ...contributor,
        avatar_url: `${contributor.avatar_url}&s=40`,
        id: `${contributor.id}`,
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
  } catch (error) {
    console.error(error.message);
  }
};
