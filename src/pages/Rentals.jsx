/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Utils/Header';
import Slideshow from '../components/Rental/Slideshow';
import Tags from '../components/Rental/Tags';
import Collapsible from '../components/About/Collapsible';
import Rating from '../components/Rental/Rating';
import Footer from '../components/Utils/Footer';
import RentalsListing from '../datas/RentalsListing.json';
import '../styles/Rentals.scss';

function Rental () {
  const { id } = useParams();
  const rental = RentalsListing.find((item) => item.id === id);

    return (
      <section className='rentalsContentContainer'>
        <Header />
        <Slideshow />
        <div className='infos'>
          <h1>{rental.title}</h1>
          <p>{rental.location}</p>
        </div>
        <Tags />
        <div className='host'>
          <h2>{rental.host.name}</h2>
          <div className='host__picture'>
				    <img src={ rental.host.picture } alt='Host photo'/>
			    </div>
        </div>
        <Rating />
        <Collapsible
          label={'Description'}
          children={rental.description}
        />
        <Collapsible
          label={'Équipements'}
          children={rental.equipments}
        />
        <Footer />
      </section>
    );
  }
  
export default Rental;