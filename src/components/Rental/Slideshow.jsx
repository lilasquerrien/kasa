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
// Si l'index de la photo actuelle est 0 alors en soustrait 1 au nombre de photos pour avoir la dernière photo sinon on soustrait 1 à l'index de la photo actuelle pour avoir la précédente
    const leftSlide = () => {
        if (currentPictureIndex === 0) {
          setCurrentPictureIndex(rental.pictures.length - 1);
        } else {
          setCurrentPictureIndex(currentPictureIndex - 1);
        }
      };
// Si l'index de la photo actuelle est égal au nombre de photos -1 (soit la dernière) alors on va sur l'index de la photo 0 (soit la première) sinon on va à la photo index + 1   
      const rightSlide = () => {
        if (currentPictureIndex === rental.pictures.length - 1) {
          setCurrentPictureIndex(0);
        } else {
          setCurrentPictureIndex(currentPictureIndex + 1);
        }
      };

// use Effect est un hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage. React enregistre la fonction passée en argument (que nous appellerons « effet »), et l'appellera plus tard, après avoir mis à jour le DOM
// Using setInterval inside React components allows us to execute a function or some code at specific intervals.
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPictureIndex(currentPictureIndex === rental.pictures.length - 1 ? 0 : currentPictureIndex + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [currentPictureIndex, rental.pictures.length])

// Set backgroundImage with Inline CSS Style
    return (
        <div className="slideshow" style={{ backgroundImage: `url(${rental.pictures[currentPictureIndex]})`}}>
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