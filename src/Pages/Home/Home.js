import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Clients from './Clients';
import Contactus from './Contactus';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Products></Products>
            <Reviews></Reviews>
            <Clients></Clients>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;