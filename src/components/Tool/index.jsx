import PropTypes from 'prop-types';
import React from 'react';
import Resources from '../Resources';
import Tags from '../Tags';

const Tool = props => {
  const { description, name, tags, resources } = props;

  return (
    <>
      <h3>
        {name}
        {resources.service && resources.service.isPaid && <small>(Paid)</small>}
      </h3>
      <p>{description}</p>
      <Resources
        resources={Object.keys(resources)
          .filter(key => resources[key])
          .map(key => {
            const resource = resources[key];
            const { url } = resource;

            return {
              id: key,
              url,
            };
          })}
      />
      <Tags tags={tags} />
    </>
  );
};

Tool.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  resources: PropTypes.shape({
    angular: PropTypes.shape({
      url: PropTypes.string,
    }),
    apache: PropTypes.shape({
      url: PropTypes.string,
    }),
    bookmarklet: PropTypes.shape({
      url: PropTypes.string,
    }),
    broccoli: PropTypes.shape({
      url: PropTypes.string,
    }),
    chrome: PropTypes.shape({
      url: PropTypes.string,
    }),
    cli: PropTypes.shape({
      url: PropTypes.string,
    }),
    firefox: PropTypes.shape({
      url: PropTypes.string,
    }),
    googleAppsScript: PropTypes.shape({
      url: PropTypes.string,
    }),
    grunt: PropTypes.shape({
      url: PropTypes.string,
    }),
    gulp: PropTypes.shape({
      url: PropTypes.string,
    }),
    illustrator: PropTypes.shape({
      url: PropTypes.string,
    }),
    java: PropTypes.shape({
      url: PropTypes.string,
    }),
    javascript: PropTypes.shape({
      url: PropTypes.string,
    }),
    linux: PropTypes.shape({
      url: PropTypes.string,
    }),
    mac: PropTypes.shape({
      url: PropTypes.string,
    }),
    nginx: PropTypes.shape({
      url: PropTypes.string,
    }),
    node: PropTypes.shape({
      url: PropTypes.string,
    }),
    php: PropTypes.shape({
      url: PropTypes.string,
    }),
    python: PropTypes.shape({
      url: PropTypes.string,
    }),
    ruby: PropTypes.shape({
      url: PropTypes.string,
    }),
    service: PropTypes.shape({
      isPaid: PropTypes.bool,
      url: PropTypes.string,
    }),
    windows: PropTypes.shape({
      url: PropTypes.string,
    }),
    wordpress: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
};

Tool.defaultProps = {
  description: '',
  name: '',
  tags: [],
  resources: null,
};

export default Tool;
