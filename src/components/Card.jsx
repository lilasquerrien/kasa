import React from 'react'
// import '../styles/Card.css';

function Card(props) {
    return (
        <section className="card">
                <img src={ props.img } className='card__img' alt="Location" />
                <h2>{ props.title }</h2>
        </section>
    )
}

export default Card