import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Education from './Education';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Stats/>
            <Awards/>
            <Pricing/>
            <Education/>
            <OpenAcount/>
            <Footer/>
        </>
     );
}

export default HomePage;