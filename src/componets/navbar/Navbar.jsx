import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">DigiTools</a>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                <li><a>Products</a></li>
                <li>
                    <a>Features</a> 
                </li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <p className='flex items-center gap-2'><MdOutlineShoppingCart />Login</p>
                <a className="btn btn-primary rounded-full">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;