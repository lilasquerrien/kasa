import React from 'react';
import Logo from '../assets/Logo.png';
import Copyright from '../assets/Copyright.png'
// import '../styles/Footer.css';

function Footer() {
	return (
    <>
	    <footer className="footer">
            <div className="logo">
                <img src={ Logo } alt="Logo de Kasa" />
            </div>
            <div className="copyright">
                <img src={ Copyright } alt="Copyright" />
            </div>
        </footer>
    </>
  	)
}

export default Footer