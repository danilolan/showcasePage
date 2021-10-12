import React, {useState} from 'react';
import './emailinput.css'

function addEmail(){
    console.log('Email adicionado ao servidor')
}

function EmailInpupt(props) {
    const [input, setinput] = useState('');
    return ( 
        <div className="emailinput">
            <input 
                type="email"
                value={input}
                onChange={e=>setinput(e.target.value)}
                placeholder='Digite o seu email...'                               
            />
            <button onClick={e=>addEmail()}>
                <i className="fa fa-envelope fa-3x"></i>
                <i className="fa fa-envelope-open fa-3x"></i>
            </button>
        </div>
     );
}

export default EmailInpupt;