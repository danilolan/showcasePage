import React from 'react';
import './logo.css'

import icon from '../../assets/img/icone.png'

function Logo(props) {
    return ( 
        <div className='logo'>
            <a  href='/'>
                <img src={icon}></img>
            </a>
        </div>
     );
}

export default Logo;