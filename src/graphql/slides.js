const getSlides = `{
  slides: allSlidesJson(sort: { fields: date, order: DESC }) {
    edges {
      node {
        authors {
          name
          twitter
        }
        date
        fields {
          img
        }
        id
        name
        stats {
          length
        }
        tags
        url
      }
    }
  }
}`;

module.exports = { getSlides };
