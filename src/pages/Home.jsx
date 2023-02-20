//Import all our components
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
//import Rentals from '../datas/RentalsList.json'
import Footer from '../components/Footer'
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