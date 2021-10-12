import React from 'react';
import './landing.css'

import icon from '../../../../assets/img/icone.png'
import data from '../../../../assets/data.json'

function Landing(props) {
    const facebookLink = data.links.facebook
    const instagramLink = data.links.instagram
    const twitterLink = data.links.twitter
    const whatsappLink = data.links.whatsapp

    return ( 
        <div className="landing">
                <div className="social">
                    <img src={icon} alt="icon" />

                    <a href='/shop'>
                        <i className='fa fa-shopping-cart'/> &nbsp; 
                        LOJA 
                    </a>

                    <div className="midia">
                        <a href={facebookLink}>
                            <i className="fa fa-facebook fa-lg"/>
                        </a>
                        <a href={instagramLink}>
                            <i className="fa fa-instagram fa-lg"/>                           
                        </a>
                        <a href={twitterLink}>
                            <i className="fa fa-twitter fa-lg"/>                           
                        </a>
                        <a href={whatsappLink}>
                            <i className="fa fa-whatsapp fa-lg"/>                   
                        </a>
                    </div>
                </div>
            </div>
     );
}

export default Landing;