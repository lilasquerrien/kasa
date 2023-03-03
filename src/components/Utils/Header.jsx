import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function Header() {
	return (
	    <header className='header'>
			<NavLink to="/">
				<img src={ Logo } alt='Logo de Kasa' className='header__logo'/>
			</NavLink>
			<nav className='header__nav'>
				<NavLink to='/' className={({isActive}) =>
					isActive ? 'activeLink': ""}>Accueil
				</NavLink> 
				<NavLink to='/About' className={({isActive}) =>
					isActive ? 'activeLink': ""}>À propos
				</NavLink> 
			</nav>
        </header>
  	)
}

export default Header;