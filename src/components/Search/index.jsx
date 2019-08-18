import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import React from 'react';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY } from '../../constants/algolia';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

const Search = props => {
  const { indexName } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

Search.propTypes = {
  indexName: PropTypes.string.isRequired,
};

export default Search;
