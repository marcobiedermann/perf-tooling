const getVideos = `{
  videos: allVideosJson {
    edges {
      node {
        authors {
          name
          twitter
        }
        id
        name
        tags
        vimeoId
        youtubeId
      }
    }
  }
}`;

module.exports = { getVideos };
