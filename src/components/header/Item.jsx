import React from 'react';
import './item.css'

function Item(props) {
    var classes = 'item '
    classes += props.shop ? 'shopItem' : ''
    const iClass = props.shop ? 'fa fa-shopping-cart' : ''
    return ( 
        <div className={classes}>
            <i className={iClass}></i> {props.label}
        </div>
     );
}

export default Item;