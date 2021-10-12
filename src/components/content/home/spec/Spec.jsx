import React from 'react';
import './spec.css'

import ItemSpec from './ItemSpec';
import data from '../../../../assets/data.json'

import video1 from '../../../../assets/video/video1.mp4'
import video2 from '../../../../assets/video/video2.mp4'
import video3 from '../../../../assets/video/video3.mp4'

const text2 = data.texts.text2
const text3 = data.texts.text3
const text4 = data.texts.text4

function Spec(props) {
    return ( 
        <div className="spec">
            <ItemSpec 
                variation={true}
                video={video1} 
                text={text2}
            />
            <ItemSpec 
                variation={false}
                video={video2} 
                text={text3}
            />
            <ItemSpec 
                variation={true}
                video={video3} 
                text={text4}
            />
        </div>
     );
}

export default Spec;