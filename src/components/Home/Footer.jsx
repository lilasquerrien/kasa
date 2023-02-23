import React from 'react';
import Logo from '../../assets/Logo.png';
import Copyright from '../../assets/Copyright.png'
import '../../styles/Footer.scss';

function Footer() {
	return (
	    <footer className='footer'>
            <div className='footer__logo'>
                <img src={ Logo } alt='Logo de Kasa' className='logo__image'/>
            </div>
            <div className='footer__copyright'>
                <img src={ Copyright } alt='Copyright'/>
            </div>
        </footer>
  	)
}

export default Footer;