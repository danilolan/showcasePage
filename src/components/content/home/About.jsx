import React from 'react';
import './about.css'

import data from '../../../assets/data.json'

function About(props) {
    const mainText = data.texts.text1
    return ( 
        <div className="about">
            <div className="text">
                {mainText}
            </div>
        </div>
     );
}

export default About;