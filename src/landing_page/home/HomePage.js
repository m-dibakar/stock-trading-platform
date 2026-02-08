import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcount from '../OpenAccount';
import Education from './Education';

function HomePage() {
    return ( 
        <>
            <Hero/>
            <Stats/>
            <Awards/>
            <Pricing/>
            <Education/>
            <OpenAcount/>
        </>
     );
}

export default HomePage;