import React from 'react';
import './About.css';
import pic from '../../Images/pic.jpg'
const About = () => {
    return (
        <div className='about'>
            <h2 className='text-center fw-bolder'>ABOUT ME</h2>
            <img src={pic} alt="" />
            <p>Hello everyone!!
                My name is Arjun Ghosh. Currently I am doing bachelors in Computer Science and Engineering. It has been quite hectic for me since I was doing this course along side my university work and I could not afford to lose my scholarship. Still I worked through it and am quite proud of myself for it.
                Now my next  'MILESTONE' is to explore machine learning and I am also planning to do some programming competition. I want to explore one thing at a time, so that I don't mess up everything.
            </p>
        </div>
    );
};

export default About;