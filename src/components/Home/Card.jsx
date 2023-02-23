import React from 'react';
import { NavLink } from "react-router-dom";
import Rentals from '../../datas/Rentals.json';
// import '../styles/Card.scss';

function Card() {
    return (
        <section className='card'>
            {
                Rentals.map(rental => 
                    <NavLink key={ rental.id } className='card__id' to={ `/rentals/${rental.id}` }> 
                        <article>
                            <figure>
                                <img className='card__image' src={ rental.cover }  alt={ rental.tags } />
                            </figure>
                            <h2 className='card__title'>{ rental.title }</h2>
                        </article>
                    </NavLink>
                )
            }
        </section>
    )
}

export default Card;