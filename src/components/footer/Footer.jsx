import React from 'react';
import './footer.css'
import icon from '../../assets/img/icone.png'

function Footer(props) {
    return ( 
        <div className="footer">
            <div className="credits">
                Desenvolvido e publicado por <img src={icon} alt='Icon'></img>
            </div>
            <div className="copyright">
                © 2021 TODOS OS DIREITOS RESERVADOS A COMPANY NAME
                <a href='/politicadeprivacidade'> Política de privacidade</a>
            </div>
        </div>
     );
}

export default Footer;