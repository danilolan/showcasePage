import React from 'react';
import './home.css'

import Landing from './Landing';
import About from './About';

function Home(props) {
    return ( 
        <div className="home">
            <Landing/>
            <About/>
        </div>
     );
}

export default Home;