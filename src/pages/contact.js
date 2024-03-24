import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ContactComp from '../components/contact/ContactComp';
import Head from 'next/head';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Navbar/>
            <ContactComp />
            <Footer/>
        </div>
    );
};

export default Contact;