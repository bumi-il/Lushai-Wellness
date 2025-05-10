import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Lushai-logo.png'
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);

    window.addEventListener('scroll', () => setShow(window.scrollY > 80));


    return (
        <div className={`navbar ${show ? 'show' : ''}`}>
            <div className='logo-container'>
                <NavLink to='/'>
                    <img src={logo} className='logo' alt='logo' />
                </NavLink>
                <h2 className='logo-text'>LUSHAI WELLNESS</h2>
            </div>
            <div className='links'>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/packages'>Packages</NavLink>
                <NavLink className='link' to='/contact'>Contact</NavLink>
                <NavLink className='link' to='/bookonline'>Book Online</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
