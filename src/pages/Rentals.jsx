import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Utils/Header';
import Slideshow from '../components/Rental/Slideshow';
import Tags from '../components/Rental/Tags';
import Collapsible from '../components/About/Collapsible';
import Rating from '../components/Rental/Rating';
import Footer from '../components/Utils/Footer';
import RentalsListing from '../datas/RentalsListing.json';

function Rental () {
  const { id } = useParams();
  const rental = RentalsListing.find((item) => item.id === id);

    return (
      <>

        <Header />
        
        <Slideshow />
        <section className='footertest'>

          <section className='rentalsContentContainer'>
            <aside className='infosContainer'>
              <div className='infos'>
                <h1 className='infos__title'>{rental.title}</h1>
                <p className='infos__location'>{rental.location}</p>
              </div>
              <Tags />
            </aside>
            <aside className='hostContainer'>
            <div className='host'>
              <p className='host__name'>{rental.host.name}</p>
              <div className='host__picture'>
                <img src={ rental.host.picture } alt='Owner Profile'/>
              </div>
            </div>
            <Rating />
            </aside>
          </section>
            <div className='collapsible__rentalspage'>
            <Collapsible
              label={'Description'}
              children={rental.description}
            />
            <Collapsible
              label={'Équipements'}
              children={rental.equipments}
            />
           
            </div>
            </section>
       

        <Footer />
     
      </>
    );
}
  
export default Rental;