import React from 'react';


function Banner (props) {
    return (
        <section className='banner'>
            <img src={ props.image } alt="Landscape Banner" className='banner__image'/>
        </section>
    )
}

export default Banner;