import React from 'react';
import Header from '../components/Utils/Header';
import Banner from '../components/Utils/Banner';
import Card from '../components/Home/Card';
import Footer from '../components/Utils/Footer';
import Cliffs from '../assets/Cliffs.png';

function Home () {
    return (
      <section className='homeContentContainer'>
        <Header />
        <Banner 
          image={ Cliffs } 
          content= 'Chez vous, partout et ailleurs'
        />
        <Card />
        <Footer />
      </section>
    );
}
  
export default Home;