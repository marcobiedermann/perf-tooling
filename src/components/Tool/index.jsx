import PropTypes from 'prop-types';
import React from 'react';
import Tags from '../Tags';

const Tool = props => {
  const {
    angular,
    apache,
    bookmarklet,
    broccoli,
    chrome,
    cli,
    description,
    firefox,
    googleAppsScript,
    grunt,
    gulp,
    illustrator,
    java,
    javascript,
    linux,
    mac,
    module,
    name,
    nginx,
    node,
    php,
    python,
    ruby,
    service,
    tags,
    windows,
    wordpress,
  } = props;

  return (
    <>
      <h3>
        {name}
        {service && service.isPaid && <small>(Paid)</small>}
      </h3>
      <p>{description}</p>
      <ul>
        {angular && (
          <li>
            <a href={angular.url}>Angular</a>
          </li>
        )}
        {apache && (
          <li>
            <a href={apache.url}>Apache</a>
          </li>
        )}
        {bookmarklet && (
          <li>
            <a href={bookmarklet.url}>Bookmarklet</a>
          </li>
        )}
        {broccoli && (
          <li>
            <a href={broccoli.url}>Broccoli</a>
          </li>
        )}
        {chrome && (
          <li>
            <a href={chrome.url}>Google Chrome</a>
          </li>
        )}
        {cli && (
          <li>
            <a href={cli.url}>CLI</a>
          </li>
        )}
        {firefox && (
          <li>
            <a href={firefox.url}>Mozilla Firefox</a>
          </li>
        )}
        {googleAppsScript && (
          <li>
            <a href={googleAppsScript.url}>Google Apps Script</a>
          </li>
        )}
        {grunt && (
          <li>
            <a href={grunt.url}>Grunt</a>
          </li>
        )}
        {gulp && (
          <li>
            <a href={gulp.url}>Gulp</a>
          </li>
        )}
        {illustrator && (
          <li>
            <a href={illustrator.url}>Adobe Illustrator</a>
          </li>
        )}
        {java && (
          <li>
            <a href={java.url}>Java</a>
          </li>
        )}
        {javascript && (
          <li>
            <a href={javascript.url}>JavaScript</a>
          </li>
        )}
        {linux && (
          <li>
            <a href={linux.url}>Linux</a>
          </li>
        )}
        {mac && (
          <li>
            <a href={mac.url}>macOS</a>
          </li>
        )}
        {module && (
          <li>
            <a href={module.url}>Module</a>
          </li>
        )}
        {nginx && (
          <li>
            <a href={nginx.url}>Nginx</a>
          </li>
        )}
        {node && (
          <li>
            <a href={node.url}>Node</a>
          </li>
        )}
        {php && (
          <li>
            <a href={php.url}>PHP</a>
          </li>
        )}
        {python && (
          <li>
            <a href={python.url}>Python</a>
          </li>
        )}
        {ruby && (
          <li>
            <a href={ruby.url}>Ruby</a>
          </li>
        )}
        {service && (
          <li>
            <a href={service.url}>Service</a>
          </li>
        )}
        {windows && (
          <li>
            <a href={windows.url}>Windows</a>
          </li>
        )}
        {wordpress && (
          <li>
            <a href={wordpress.url}>WordPress</a>
          </li>
        )}
      </ul>
      <Tags tags={tags} />
    </>
  );
};

Tool.propTypes = {
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
  description: PropTypes.string,
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
  module: PropTypes.shape({
    url: PropTypes.string,
  }),
  name: PropTypes.string,
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
  tags: PropTypes.arrayOf(PropTypes.string),
  windows: PropTypes.shape({
    url: PropTypes.string,
  }),
  wordpress: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Tool.defaultProps = {
  angular: null,
  apache: null,
  bookmarklet: null,
  broccoli: null,
  chrome: null,
  cli: null,
  description: '',
  firefox: null,
  googleAppsScript: null,
  grunt: null,
  gulp: null,
  illustrator: null,
  java: null,
  javascript: null,
  linux: null,
  mac: null,
  module: null,
  name: '',
  nginx: null,
  node: null,
  php: null,
  python: null,
  ruby: null,
  service: null,
  tags: [],
  windows: null,
  wordpress: null,
};

export default Tool;
