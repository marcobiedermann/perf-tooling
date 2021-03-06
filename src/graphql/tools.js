const getTools = `{
  tools: allToolsJson {
    edges {
      node {
        description
        id
        fields {
          stars {
            angular
            bookmarklet
            broccoli
            chrome
            cli
            googleAppsScript
            grunt
            gulp
            javascript
            linux
            mac
            nginx
            node
            php
            python
            ruby
            service
            wordpress
          }
        }
        name
        resources {
          angular {
            url
          }
          apache {
            url
          }
          bookmarklet {
            url
          }
          broccoli {
            url
          }
          chrome {
            url
          }
          cli {
            url
          }
          firefox {
            url
          }
          googleAppsScript {
            url
          }
          grunt {
            url
          }
          gulp {
            url
          }
          illustrator {
            url
          }
          java {
            url
          }
          javascript {
            url
          }
          linux {
            url
          }
          mac {
            url
          }
          nginx {
            url
          }
          node {
            url
          }
          php {
            url
          }
          python {
            url
          }
          ruby {
            url
          }
          service {
            isPaid
            url
          }
          windows {
            url
          }
          wordpress {
            url
          }
        }
        tags
      }
    }
  }
}`;

module.exports = { getTools };
