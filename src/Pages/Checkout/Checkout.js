
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css';
const Checkout = () => {
    // const [user] = useAuthState(auth);
    // const [name, setName] = useState('');
    const [text, setText] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');
    // const [error, setError] = useState('');
    // // const navigate = useNavigate();

    // const handleNameBlur = event => {
    //     setName(event.target.value);
    // }

    // const handleAddressBlur = event => {
    //     setAddress(event.target.value);
    // }

    // const handlePhoneBlur = event => {
    //     setPhone(event.target.value);
    // }

    const handleSubmit = event => {
        event.preventDefault();

        setText('THANK YOU FOR THE BOOKING!!!')

    }
    return (
        <div className='form-container'>

            {
                text ?
                    <div className='d-flex text-message'><h1 className='text-center'>{text}</h1></div>
                    :
                    <div className='container w-50 mx-auto my-5 form'>
                        <h2 className='form-title text-center my-3 '>Your Checkout Info</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter address" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter phone number" required />
                            </Form.Group>
                            <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>}
        </div>
    );
};

export default Checkout;