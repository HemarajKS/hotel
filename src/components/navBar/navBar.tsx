import React from 'react';
import './navbar.css';
import Search from '../search/search';
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={require('../../assets/images/logo.png')} alt="logo" />
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
