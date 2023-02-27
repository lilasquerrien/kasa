import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams } from 'react-router-dom';
import RentalsListing from '../../datas/RentalsListing.json';
import '../../styles/Slideshow.scss';

const Slideshow = () => {
    const { id } = useParams();
    let rental = RentalsListing.find(i => i.id === id);

    return (
        <section id='Slideshow'>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${rental.pictures[0]})` }}></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${rental.pictures[1]})` }}></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${rental.pictures[2]})` }}></div>
                </div>
            </Slide>
        </section>
  );
}

export default Slideshow;