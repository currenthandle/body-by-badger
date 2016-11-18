import React, { Component } from 'react';

import HomeContent from './HomeContent';

//import './css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <HomeContent />
                <h2>About Vengeance Producer Suite Metrum</h2>
                <div className='about-text-container'>

                    <p>With a fresh supply of more than 2,400 pristine audio samples, Vengeance Essential Deep House Vol. 2 delivers the very best in drum, bassline, and percussion samples, as well as Vengeance-quality end live-played saxophone and guitar recordings.</p>
                    <p>I love that I have female friends who possess deep inner strength. I love that we constantly empower each other and support each other success. I love that we are always co-creating. Each one of my girl friends has a unique quality that I value and cherish. Ladies, you inspire me everyday!</p>

                    <p>If youre a Trump supporter and you are still making the argument that these people dont represent the majority of Trump voters.... you are missing an increasingly dangerous point. If you feel anything but shitty about this situation, you should get the empathy center of your brain checked.</p>
                </div>
                <div className='about-img-container'>
                    <img src="about.jpg" />
                </div>

            </div>
        );
    }
}

export default Home;
