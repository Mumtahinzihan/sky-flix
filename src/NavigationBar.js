import React from 'react';
import { Link } from 'react-router-dom';
export default function NavigationBar() {
    return (
        <Link to='/details' class='navigation'>
            <span>Book your trip</span>
            <span>About us</span>
            <span>Find us</span>
            <span className='logo'>Cart</span>
        </Link>
    )
}    