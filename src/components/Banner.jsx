import React from 'react'
import Landscape from '../assets/Landscape.png';
// import '../styles/Banner.css';

function Banner () {
    return (
        <section className="banner">
            <img src={Landscape} alt="Paysage" />
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner