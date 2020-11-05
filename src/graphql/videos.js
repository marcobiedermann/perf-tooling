const getVideos = `{
  videos: allVideosJson {
    edges {
      node {
        authors {
          name
          twitter
        }
        fields {
          img
          stats {
            dislikes
            likes
            views
          }
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
