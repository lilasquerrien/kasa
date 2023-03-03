import React from 'react';
import { NavLink } from "react-router-dom";
import RentalsListing from '../../datas/RentalsListing.json';

function Card() {
    return (
        <section className='card'>
            {
                RentalsListing.map(rental => 
                    <NavLink key={ rental.id } className='card__element' to={ `/rentals/${ rental.id }` }> 
                        <article>
                            <img className='card__image' src={ rental.cover }  alt={ rental.tags } />
                            <h2 className='card__title'>{ rental.title }</h2>
                        </article>
                    </NavLink>
                )
            }
        </section>
    )
}

export default Card;