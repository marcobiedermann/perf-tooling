import PropTypes from 'prop-types';
import React from 'react';

const Contributors = props => {
  const { contributors } = props;

  return (
    <ul>
      {contributors.map(contributor => (
        <li key={contributor.id}>
          <a href={contributor.html_url}>
            <img src={contributor.avatar_url} alt={contributor.login} />
          </a>
        </li>
      ))}
    </ul>
  );
};

Contributors.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.shape()),
};

Contributors.defaultProps = {
  contributors: [],
};

export default Contributors;
