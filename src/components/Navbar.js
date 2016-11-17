import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import './SamplePack.css';
//import Navbar from './Navbar';
import './css/Navbar.css';
import { Link, IndexLink } from 'react-router'; 

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <IndexLink to='/'
            className='index'
        >
            <img src='logo.jpg' />
        </IndexLink>
        <Link to='treatments'
            className='link'
        >Treatments</Link>
        <Link to='therapist'
            className='link'
        >Therapist</Link>
        <Link to='results'
            className='link'
        >Results</Link>
        <Link to='contact'
            className='link'
        >Contact</Link>
      </nav>
    );
  }
}

export default Navbar;
