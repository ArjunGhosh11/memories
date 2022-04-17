import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../Images/logo.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header '>
            <nav className='mx-auto d-flex  align-items-center'>
                <div>
                    <Link to='/home'><img src={logo} width={50} alt="" /></Link>
                    <Link to='/' >Home</Link>
                    <Link to='/home#services'>Services</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div>
                    <Link to='/about'>About</Link>
                    <Link to='/about'>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;