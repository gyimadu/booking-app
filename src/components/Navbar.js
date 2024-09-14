import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        // NAVIGATION BAR
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='logo-container'>
                    <h3>Book-In</h3>
                </div>

                <nav className='nav-wrapper'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/book-room">Book Room</Link></li>
                        <li><a href='#'>Support</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default Navbar;