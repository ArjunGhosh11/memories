import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {

    return (
        <div className='mb-5 p-5 home'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;