import React from 'react';
import { useParams } from 'react-router-dom';
import RentalsListing from '../../datas/RentalsListing.json';
// import '../../styles/Header.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating () {
    const { id } = useParams();
    let rental = RentalsListing.find(i => i.id === id);
	const star = [];

    for (let i = 0; i < 5; i++) {
        if (i < rental.rating) {
            star.push(<FontAwesomeIcon icon={faStar} style={{color:"#FF6060"}} alt="Red Star" key={i} />);
        } else {
            star.push(<FontAwesomeIcon icon={faStar} style={{color:"#E3E3E3"}} alt="Grey Star" key={i} />);
        }
    }
            return (
                <div className='starsContentContainer'>{star}</div>
            )
}

export default Rating;