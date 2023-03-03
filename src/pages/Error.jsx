import React from 'react';
import Header from '../components/Utils/Header';
import Message from '../components/Error/Message';
import Footer from '../components/Utils/Footer';

function Error () {
    return (
        <section className='errorContentContainer'>
            <Header />
            <Message />
            <Footer />
        </section>
    )
}

export default Error;