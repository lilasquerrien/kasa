import React from 'react';
import { NavLink } from "react-router-dom";
import RentalsListing from '../../datas/RentalsListing.json';

// La méthode map() permet facilement d'itérer sur des données et de retourner un tableau d'éléments
// Les clés/keys aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable.

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