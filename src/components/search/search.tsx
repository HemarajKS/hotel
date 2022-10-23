import { useState } from 'react';
import Hotels from '../hotels/hotels';
import './search.css';

const Search = (props: any) => {
  const searchHandler = (e: any) => {
    props.onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
