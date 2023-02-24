import React from 'react';
import Header from '../components/Home/Header';
import Message from '../components/Error/Message';
import Footer from '../components/Home/Footer';
import '../styles/Error.scss';

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