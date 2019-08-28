const getAudits = `{
  audits: allAuditsJson(sort: { fields: date, order: DESC }) {
    edges {
      node {
        authors {
          name
          twitter
        }
        date
        id
        name
        stats {
          length
        }
        tags
        targets
        types
        url
      }
    }
  }
}`;

module.exports = { getAudits };
