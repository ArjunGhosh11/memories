import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const navigate = useNavigate();
    const { name, price, img, details } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>

            {
                details.map(detail => <p>{detail}</p>)
            }
            <button onClick={() => navigate('/checkout')} className='checkout-button'>Proceed To Checkout</button>
        </div>
    );
};

export default Service;