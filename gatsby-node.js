const { createContentDigest } = require('gatsby-core-utils');
const isGithubUrl = require('is-github-url');
const config = require('./src/config');
const { getRepositoryContributors, getRepositoryStars } = require('./src/gateways/github');
const { getSlideshareSlide } = require('./src/gateways/slideshare');
const { getSpeakerdeckSlide } = require('./src/gateways/speakerdeck');
const { getTwitterUser } = require('./src/gateways/twitter');
const { getVimeoVideo } = require('./src/gateways/vimeo');
const { getYoutubeVideo } = require('./src/gateways/youtube');

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;
  const nodeType = node.internal.type;

  if (
    ['ArticlesJson', 'AuditsJson', 'BooksJson', 'CoursesJson', 'SlidesJson', 'VideosJson'].includes(
      nodeType,
    )
  ) {
    const { authors } = node;

    try {
      const twitterUsers = await Promise.all(
        authors
          .filter((author) => author.twitter)
          .map((author) => {
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
        const { img } = await getSlideshareSlide(url);

        createNodeField({
          name: 'img',
          node,
          value: img,
        });
      } catch (error) {
        console.error(error.message, { node });
      }
    }

    if (isSpeakerdeckUrl) {
      try {
        const { img } = await getSpeakerdeckSlide(url);

        createNodeField({
          name: 'img',
          node,
          value: img,
        });
      } catch (error) {
        console.error(error.message, { node });
      }
    }
  }

  if (nodeType === 'ToolsJson') {
    const { resources } = node;

    await Promise.all(
      Object.keys(resources).map(async (key) => {
        const resource = resources[key];

        if (!isGithubUrl(resource.url)) {
          return;
        }

        try {
          const { stats } = await getRepositoryStars(resource.url);

          createNodeField({
            name: 'stars',
            node,
            value: {
              [key]: stats.stars,
            },
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
        const { img, stats } = await getVimeoVideo(vimeoId);

        createNodeField({
          name: 'img',
          node,
          value: img,
        });
        createNodeField({
          name: 'stats',
          node,
          value: stats,
        });
      } catch (error) {
        console.log(error.message, { node });
      }
    }

    if (youtubeId) {
      try {
        const { img, stats } = await getYoutubeVideo(youtubeId);

        createNodeField({
          name: 'img',
          node,
          value: img,
        });
        createNodeField({
          name: 'stats',
          node,
          value: stats,
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

    contributors.forEach((contributor) => {
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
