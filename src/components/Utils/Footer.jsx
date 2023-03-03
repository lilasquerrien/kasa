import React from 'react';
import FooterLogo from '../../assets/FooterLogo.png';

function Footer() {
	return (
	    <footer className='footer'>
            <div className='footer__logo'>
                <img src={ FooterLogo } alt='Logo de Kasa' className='footer__image'/>
            </div>
            <div className='footer__copyright'>
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
  	)
}

export default Footer;