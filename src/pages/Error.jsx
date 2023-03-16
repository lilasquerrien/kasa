import React from 'react';
import Header from '../components/Utils/Header';
import Message from '../components/Error/Message';
import Footer from '../components/Utils/Footer';

function Error () {
    return (
        <>

            <Header />
            <section className='container'>
            <Message />
            </section>
            <Footer />
        
        </>
    );
}

export default Error;