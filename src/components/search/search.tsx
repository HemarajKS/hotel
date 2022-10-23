import { useState } from 'react';
import Hotels from '../hotels/hotels';
import './search.css';

const Search = (props: any) => {
  const searchHandler = (e: any) => {
    e.preventDefault();
    props.onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={searchHandler}>
      <input type="text" name="search" id="search" placeholder="Search" />
    </form>
  );
};

export default Search;
