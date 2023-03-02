import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams } from 'react-router-dom';
import RentalsListing from '../../datas/RentalsListing.json';
// import '../../styles/Slideshow.scss';

const Slideshow = () => {
    const { id } = useParams();
    let rental = RentalsListing.find(i => i.id === id);
     
    // Nb images à afficher
    const picturesNb = Math.min(rental.pictures.length);
     
    // Tableau pour chaque image
    const pictures = [];
    for (let i = 0; i < picturesNb; i++) {
        pictures.push(
        <div key={i} className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${rental.pictures[i]})` }}></div>
        </div>
      );
    }
     
    return (
        <section id='slideshow'>
            <Slide>
                {pictures}
            </Slide>
        </section>
    );
};

export default Slideshow;