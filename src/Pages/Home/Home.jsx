import React from 'react';
import HomeHero from './HomeComponets/HomeHero/HomeHero';
import HomeFeature from './HomeComponets/HomeFeatures/HomeFeature';
import ReactFeature from './HomeComponets/ReactFeatures/ReactFeature';


const Home = () => {
    return (
        <div>
            <HomeHero />
            <HomeFeature />
            <ReactFeature />
        </div>
    );
};

export default Home;