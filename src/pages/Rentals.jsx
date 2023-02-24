import React from 'react';
import Header from '../components/Home/Header';
// import Slideshow from '../components/Rental/Slideshow';
import Collapsible from '../components/About/Collapsible';
import Rating from '../components/Rental/Rating';
import Footer from '../components/Home/Footer';


// import '../styles/Rentals.scss';

function Rentals () {
    return (
      <section className='RentalsContentContainer'>
        <Header />
    
        <Collapsible />
        <Rating />
        <Footer />
      </section>
    );
  }
  
export default Rentals;