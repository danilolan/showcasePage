import React from 'react';
import './item.css'

function Item(props) {
    var classes = 'item '
    classes += props.shop ? 'shop' : ''
    console.log(props.label, classes)
    return ( 
        <div className={classes}>
            {props.label}
        </div>
     );
}

export default Item;