import React from 'react';
import './home.css'

import Landing from './landing/Landing';
import About from './about/About';
import Spec from './spec/Spec';
import EmailInput from './emailinput/EmailInput';

function Home(props) {
    return ( 
        <div className="home">
            <Landing/>
            <About/>
            <EmailInput/>
            <Spec/>
        </div>
     );
}

export default Home;