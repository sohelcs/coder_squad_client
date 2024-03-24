import React from 'react';
import Navbar from '../components/shared/Navbar';
import AllServices from '../components/service/AllServices';
import Footer from '../components/shared/Footer';
import Head from 'next/head';

const Services = () => {
    return (
        <div>
            <Head>
                <title>Our All Services</title>
            </Head>
            <Navbar />
            <AllServices />
            <Footer/>
            
        </div>
    );
};

export default Services;