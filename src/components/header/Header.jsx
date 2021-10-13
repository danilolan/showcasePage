import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

import Logo from './Logo';
import Item from './Item';

import data from '../../assets/data.json'

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
                <Link to='/contactus'>
                    <Item label='FALE CONOSCO'/>                    
                </Link>
                <a href={data.links.shop} className='shop'>
                    <Item label='LOJA' shop= {true}/>  
                </a>
            </div>
        </div>
     );
}

export default Header;