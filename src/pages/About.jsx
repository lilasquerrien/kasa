import React from 'react'
//Import all our components
import Banner from '../components/About/Banner'
import Collapsible from '../components/About/Collapsible'
// import '../styles/About.css'

function About() {
    return (
        <section className='contentContainer'>
            <Banner />
            <Collapsible
                label={'Fiabilité'}
                children={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
            />
        </section>
    );
}

export default About;
