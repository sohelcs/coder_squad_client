import Head from 'next/head';
import React from 'react';
import ShopifyDetails from '../components/shopify/ShopifyDetails';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ShopifyServices from '../components/shopify/ShopifyServices';
import RecentWorks from '../components/home/RecentWorks';
import Reviews from '../components/home/Reviews';
import HelpCenter from '../components/home/HelpCenter';

const Shopify = () => {
    return (
        <div>
            <Head>
                <title>Shopify</title>
            </Head>
            <Navbar />
            <ShopifyDetails />
            <ShopifyServices />
            <RecentWorks />
            <Reviews />
            <HelpCenter />
            <Footer/>
        </div>
    );
};

export default Shopify;