import React from 'react';
import './itemspec.css'

function itemSpecs(props) {
    var classes = 'itemspec '
    classes += props.variation ? 'variation' : ''
    return ( 
        <div className={classes}>
            <video 
                src={props.video}
                autoPlay='true'
                loop='true'
                muted='true'
                />
            <div className="text">
                <div className="title">
                    {props.text.title}
                </div>
                <div className="content">
                    {props.text.content}
                </div>                
            </div>
        </div>
     );
}

export default itemSpecs;