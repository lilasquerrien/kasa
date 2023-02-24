import React from 'react';
import { useParams } from 'react-router-dom';
import Rentals from '../../datas/Rentals.json';
import '../../styles/Header.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating () {
    const { id } = useParams()
    let rental = Rentals.find(i => i.id === id)
	const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < rental.rating) {
            stars.push(<FontAwesomeIcon icon={faStar} style={{color:"#FF6060"}} alt="Red star" key={i} />);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} style={{color:"#E3E3E3"}} alt="Grey star" key={i} />);
        }
    }
        return (
            <div className='starsContentcontainer'>{stars}</div>
        )
}

export default Rating;