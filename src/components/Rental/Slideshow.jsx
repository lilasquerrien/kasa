import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RentalsListing from '../../datas/RentalsListing.json';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {

    const { id } = useParams()
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    let rental = RentalsListing.find(i => i.id === id);

    const leftSlide = () => {
        if (currentPictureIndex === 0) {
          setCurrentPictureIndex(rental.pictures.length - 1);
        } else {
          setCurrentPictureIndex(currentPictureIndex - 1);
        }
      };
      
      const rightSlide = () => {
        if (currentPictureIndex === rental.pictures.length - 1) {
          setCurrentPictureIndex(0);
        } else {
          setCurrentPictureIndex(currentPictureIndex + 1);
        }
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPictureIndex(currentPictureIndex === rental.pictures.length - 1 ? 0 : currentPictureIndex + 1)
        }, 3500)
        return () => clearInterval(interval)
    }, [currentPictureIndex, rental.pictures.length])

    return (
        <div className="slideshow"
            style={{ backgroundImage: `url(${rental.pictures[currentPictureIndex]})`}}>
            <div className={rental.pictures.length === 1 ? "slideshow__icon--hidden" : "slideshow__icon"}>
                <button className="slideshow__icon__btn" onClick={leftSlide}><FontAwesomeIcon icon={faChevronLeft} style={{color:"#FFFFFF"}} alt="Left Chevron"/></button>
                <button className="slideshow__icon__btn" onClick={rightSlide}><FontAwesomeIcon icon={faChevronRight} style={{color:"#FFFFFF"}} alt="Right Chevron"/></button>
            </div>
            { rental.pictures.length > 1 &&
            <p className="slideshow__text">{currentPictureIndex +1}/{rental.pictures.length}</p>
          }
        </div>
    )
}

export default Slideshow;