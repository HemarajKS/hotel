import React, { useState, useEffect } from 'react';
import './navbar.css';
import Search from '../search/search';
const Navbar = (props: any) => {
  const [search, setSearch] = useState('');

  const onSearch = (data: any) => {
    setSearch(data);
  };

  useEffect(() => {
    props.onSearchHome(search);
  });

  console.log(search);

  return (
    <div className="navBar">
      <div className="logo">
        <img src={require('../../assets/images/logo.png')} alt="logo" />
      </div>
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
