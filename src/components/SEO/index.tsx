import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import Helmet from 'react-helmet';

interface SEOQuery {
  site: {
    siteMetadata: {
      author: string;
      description: string;
      title: string;
    };
  };
}

interface Meta {
  [key: string]: string;
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: FC<SEOProps> = (props) => {
  const { description, lang = 'en', meta = [], title } = props;
  const { site } = useStaticQuery<SEOQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
