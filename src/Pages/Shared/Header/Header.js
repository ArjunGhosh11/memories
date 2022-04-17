import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header '>
            <nav className='mx-auto d-flex  align-items-center'>

                <Link to='/home'><FontAwesomeIcon className='text-dark  logo' icon={faCameraRetro}></FontAwesomeIcon></Link>
                <Link to='/' >Home</Link>
                <Link to='/home#services'>Services</Link>
                <Link to='/blogs'>Blogs</Link>

                <Link to='/about'>About</Link>
                {
                    user ?
                        <button className='btn btn-link text-white text-decoration-none fw-bolder ms-4' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;