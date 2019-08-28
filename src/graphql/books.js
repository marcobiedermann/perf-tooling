const getBooks = `{
  books: allBooksJson(sort: { fields: date, order: DESC }) {
    edges {
      node {
        authors {
          name
          twitter
        }
        date
        description
        id
        img {
          childImageSharp {
            fixed(width: 200) {
              height
              src
              srcSet
              srcSetWebp
              srcWebp
              width
            }
          }
        }
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

module.exports = { getBooks };
