import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = ({cartCount}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a> </li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <h2 className="btn btn-ghost text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-purple-500">DigiTools</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Products</a></li>
                <li><a>Features</a> </li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className='flex items-center gap-2'>
                    <div className='relative inline-flex'>
                        <MdOutlineShoppingCart size={24}/>{cartCount > 0 &&(<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4  flex items-center justify-center'>{cartCount}</span>)}
                    </div>
                    Login</button>
                <a className="btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none">Get Started</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;