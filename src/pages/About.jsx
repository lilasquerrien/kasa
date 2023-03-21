import React from 'react';
import Header from '../components/Utils/Header';
import Banner from '../components/Utils/Banner';
import Collapsible from '../components/Utils/Collapsible';
import Footer from '../components/Utils/Footer';
import Mountains from '../assets/Mountains.png';

function About () {
    return (
        <>
        
            <Header />
            <section className='container'>
                <div className='aboutBanner'>
            <Banner 
                image= { Mountains }
            />
                </div>
            <section className='aboutCollapsible'>
            <Collapsible
                label= {'Fiabilité'}
                children= {'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
            />
            <Collapsible
                label={'Respect'}
                children= {'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
            />
            <Collapsible
                label= {'Service'}
                children= {'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}
            />
            <Collapsible
                label= {'Sécurité'}
                children= {'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
            />
            </section>
            </section>
            <Footer />
            
        </>
    );
}

export default About;
