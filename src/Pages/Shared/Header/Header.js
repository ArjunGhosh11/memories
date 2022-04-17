import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className=' '>
            {/* <nav className='mx-auto d-flex  align-items-center'>

                <Link to='/home'><FontAwesomeIcon className='text-dark  logo' icon={faCameraRetro}></FontAwesomeIcon></Link>
                <Link to='/' >Home</Link>
                <Link to='/blogs'>Blogs</Link>

                <Link to='/about'>About</Link>
                {
                    user ?
                        <button className='btn btn-link text-white text-decoration-none fw-bolder ms-4' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }

            </nav> */}
            <Navbar className='header' collapseOnSelect expand="lg" sticky='top' bg='secondary' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <FontAwesomeIcon className='text-dark  logo' icon={faCameraRetro}></FontAwesomeIcon>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="home">Home</Nav.Link>
                            </Nav>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            </Nav>
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;