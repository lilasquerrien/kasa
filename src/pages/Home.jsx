import React from 'react'
//Import all our components
import Header from '../components/Home/Header'
import Banner from '../components/Home/Banner'
import Card from '../components/Home/Card'
//import Rentals from '../datas/RentalsList.json'
import Footer from '../components/Home/Footer'
// import '../styles/Home.css'

function Home() {
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