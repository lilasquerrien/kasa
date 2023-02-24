import React from 'react';
import Header from '../components/Home/Header';
import Banner from '../components/Home/Banner';
import Card from '../components/Home/Card';
import Footer from '../components/Home/Footer';
import '../styles/Home.scss';

function Home () {
    return (
      <section className='homeContentContainer'>
        <Header />
        <Banner />
        <Card />
        <Footer />
      </section>
    );
  }
  
export default Home;