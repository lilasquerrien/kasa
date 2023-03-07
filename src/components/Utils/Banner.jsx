import React from 'react';


function Banner (props) {
    return (
        <section className='banner'>
            <img src={ props.image } alt="Landscape Banner" className='banner__image'/>
            <h1 className='banner__title'>{ props.content }</h1>
        </section>
    )
}

export default Banner;