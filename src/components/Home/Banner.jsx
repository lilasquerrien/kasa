import React from 'react';
import Cliffs from '../../assets/Cliffs.png';
import '../../styles/Banner.scss';

function Banner () {
    return (
        <banner className='banner'>
            <img src={Cliffs} className='banner__image' alt='Cliffs'/>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </banner>
    )
}

export default Banner;