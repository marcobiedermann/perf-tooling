import algoliasearch from 'algoliasearch/lite';
import React, { FC } from 'react';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY } from '../../constants/algolia';
import Hits from '../../containers/Hits';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

export interface SearchProps {
  indexName: string;
}

const Search: FC<SearchProps> = (props) => {
  const { indexName } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <SearchBox />
      <Hits indexName={indexName} />
    </InstantSearch>
  );
};

export default Search;
