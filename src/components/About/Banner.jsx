import React from 'react';
import Mountains from '../../assets/Mountains.png';
// import '../sass/layout/banner';

function Banner () {
    return (
        <section className='banner'>
            <img src={Mountains} className='banner__image' alt='Mountains'/>
        </section>
    )
}

export default Banner;