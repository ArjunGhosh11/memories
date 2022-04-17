import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-5 p-5 bg-secondary'>
                <p className='text-white'>copyright <FontAwesomeIcon icon={faCopyright} /> {year}</p>
            </footer>
        </div>
    );
};

export default Footer;