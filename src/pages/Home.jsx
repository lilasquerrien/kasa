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
          <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        <Banner 
          image={ Cliffs } 
        />
        <Card />
        <Footer />
      </section>
    );
}
  
export default Home;