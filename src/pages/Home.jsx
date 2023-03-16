import React from 'react';
import Header from '../components/Utils/Header';
import Banner from '../components/Utils/Banner';
import Card from '../components/Home/Card';
import Footer from '../components/Utils/Footer';
import Cliffs from '../assets/Cliffs.png';

function Home () {
    return (
      <>

        <Header />
        <section className='container'>
          <div className='homeBanner'>
        <Banner
          image={ Cliffs } 
          content= 'Chez vous, partout et ailleurs'
        />
          </div>
        <Card />
        </section>
        <Footer />

      </>
    );
}
  
export default Home;