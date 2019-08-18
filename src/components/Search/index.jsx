import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import React from 'react';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY } from '../../constants/algolia';
import Hits from '../../containers/Hits';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

const Search = props => {
  const { indexName } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <SearchBox />
      <Hits indexName={indexName} />
    </InstantSearch>
  );
};

Search.propTypes = {
  indexName: PropTypes.string.isRequired,
};

export default Search;
