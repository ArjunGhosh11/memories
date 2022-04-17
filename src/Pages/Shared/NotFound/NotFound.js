import React from 'react';
import './NotFound.css';
import error from '../../../Images/404.jpg'
const NotFound = () => {
    return (
        <div className=' d-flex justify-content-center'>
            <img style={{ height: '600px' }} src={error} alt="" />
        </div>
    );
};

export default NotFound;