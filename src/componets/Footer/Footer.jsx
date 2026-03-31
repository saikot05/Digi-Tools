import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-[#101727] text-white px-4 py-16'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid sm:grid-cols-2 md:grid-cols-5 gap-10 pb-10 text-center md:text-left border-b border-gray-700'>
                    <div className='md:col-span-1 space-y-4'>
                        <h2 className='text-2xl font-bold'>DigiTools</h2>
                        <p className='text-sm text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold'>Product</h3>
                        <ul className='space-y-3 text-sm text-gray-400'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold'>Company</h3>
                        <ul className='space-y-3 text-sm text-gray-400'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold'>Resources</h3>
                        <ul className='space-y-3 text-sm text-gray-400'>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold'>Social Links</h3>
                        <div className='flex items-center gap-3 text-center justify-center md:justify-start'>
                            <div className='w-10 h-10 bg-[#1a1d27] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700'>
                                <FaInstagram className='text-white' />
                            </div>
                            <div className='w-10 h-10 bg-[#1a1d27] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700'>
                                <FaFacebook className='text-white' />
                            </div>
                            <div className='w-10 h-10 bg-[#1a1d27] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700'>
                                <FaXTwitter className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-sm text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex items-center gap-6 text-sm text-gray-400'>
                        <span className='cursor-pointer hover:text-white'>Privacy Policy</span>
                        <span className='cursor-pointer hover:text-white'>Terms of Service</span>
                        <span className='cursor-pointer hover:text-white'>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;