import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import './SamplePack.css';
import Navbar from './Navbar';

import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar />
        
      </div>
    );
  }
}

export default Header;
