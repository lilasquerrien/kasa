import React from 'react';
import Logo from '../../assets/Logo.png';
import Copyright from '../../assets/Copyright.png'
// import '../styles/Footer.css';

function Footer() {
	return (
	    <footer className='footer'>
            <div className='footer__logo'>
                <img src={ Logo } alt='Logo de Kasa' className='logo__image'/>
            </div>
            <div className='copyright'>
                <img src={ Copyright } alt='Copyright' className='copyright__image'/>
            </div>
        </footer>
  	)
}

export default Footer;