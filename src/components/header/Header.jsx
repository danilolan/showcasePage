import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

import Logo from './Logo';
import Item from './Item';

function Header(props) {
    return ( 
        <div className='header'>
            <Logo/>                                         
            <div className='itemsContainer'>
                <Link to='/forum'>
                    <Item label='FÓRUM'/>
                </Link>
                <Link to='/faq'>
                    <Item label='FAQ'/>
                </Link>
                <Link to='/contact'>
                    <Item label='FALE CONOSCO'/>                    
                </Link>
                <Link to='/shop' className='shop'>
                    <Item label='LOJA' shop= {true}/>  
                </Link>
            </div>
        </div>
     );
}

export default Header;