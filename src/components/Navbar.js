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
            <img src='logo.jpg' 
                className='logo'
            />
        </IndexLink>
        <div className='link-container'>
            <div className='link'>
                <Link to='treatments'>Treatments</Link>
            </div>
            <div className='link'>
                <Link to='therapist'>Therapist</Link>
            </div>
            <div className='link'>
                <Link to='results' >Results</Link>
            </div>
            <div className='link'>
                <Link to='contact' >Contact</Link>
            </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
