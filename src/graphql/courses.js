const getCourses = `{
  courses: allCoursesJson(sort: { fields: date, order: DESC }) {
    edges {
      node {
        authors {
          name
          twitter
        }
        date
        id
        img {
          childImageSharp {
            fixed(width: 277) {
              height
              src
              srcSet
              srcSetWebp
              srcWebp
              width
            }
          }
        }
        isPaid
        name
        stats {
          estimatedTime
          level
        }
        tags
        url
      }
    }
  }
}`;

module.exports = { getCourses };
