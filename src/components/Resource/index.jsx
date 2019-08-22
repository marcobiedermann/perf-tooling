import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';
import React from 'react';
import * as resources from '../../constants/resources';
import AngularIcon from '../../images/icons/angular.svg';
import ApacheIcon from '../../images/icons/apache.svg';
import BookmarkletIcon from '../../images/icons/bookmarklet.svg';
import BroccoliIcon from '../../images/icons/broccoli.svg';
import ChromeIcon from '../../images/icons/chrome.svg';
import CliIcon from '../../images/icons/cli.svg';
import FirefoxIcon from '../../images/icons/firefox.svg';
import GoogleAppsScriptIcon from '../../images/icons/google-apps-script.svg';
import GruntIcon from '../../images/icons/grunt.svg';
import GulpIcon from '../../images/icons/gulp.svg';
import IllustratorIcon from '../../images/icons/illustrator.svg';
import JavaIcon from '../../images/icons/java.svg';
import JavascriptIcon from '../../images/icons/javascript.svg';
import LinuxIcon from '../../images/icons/linux.svg';
import MacIcon from '../../images/icons/mac.svg';
import NginxIcon from '../../images/icons/nginx.svg';
import NodeIcon from '../../images/icons/node.svg';
import PhpIcon from '../../images/icons/php.svg';
import PythonIcon from '../../images/icons/python.svg';
import RubyIcon from '../../images/icons/ruby.svg';
import SafariIcon from '../../images/icons/safari.svg';
import ServiceIcon from '../../images/icons/service.svg';
import WindowsIcon from '../../images/icons/windows.svg';
import WordpressIcon from '../../images/icons/wordpress.svg';
import styles from './style.module.css';

const Resource = props => {
  const { className, id, url } = props;

  return (
    <a
      href={url}
      className={classNames(className, styles.resource, {
        [styles[`resource${capitalize(id)}`]]: id,
      })}
      title={resources[id]}
    >
      {id === 'angular' && <AngularIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'apache' && <ApacheIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'bookmarklet' && <BookmarkletIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'broccoli' && <BroccoliIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'chrome' && <ChromeIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'cli' && <CliIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'firefox' && <FirefoxIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'googleAppsScript' && <GoogleAppsScriptIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'grunt' && <GruntIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'gulp' && <GulpIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'illustrator' && <IllustratorIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'java' && <JavaIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'javascript' && <JavascriptIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'linux' && <LinuxIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'mac' && <MacIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'nginx' && <NginxIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'node' && <NodeIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'php' && <PhpIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'python' && <PythonIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'ruby' && <RubyIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'safari' && <SafariIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'service' && <ServiceIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'windows' && <WindowsIcon width="1.5em" height="1.5em" fill="#fff" />}
      {id === 'wordpress' && <WordpressIcon width="1.5em" height="1.5em" fill="#fff" />}
    </a>
  );
};

Resource.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
};

Resource.defaultProps = {
  className: '',
  id: '',
  url: '',
};

export default Resource;
