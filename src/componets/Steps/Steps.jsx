import React from 'react';
import userIcon from '../../assets/user.png';
import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';
const Steps = () => {
    return (
        <div className='bg-gray-100 py-16 px-4'>
            <div className='max-w-6xl mx-auto py-10 text-center space-y-4'>
                <div className='text-center mb-8'>
                    <h2 className='text-5xl font-bold'>Get Started in 3 Steps</h2>
                    <p className='text-sm text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-6 py-6'>
                    <div className='card bg-base-100 shadow-sm rounded-lg  p-6 relative text-center space-y-4 aspect-auto'>
                        <p className='absolute top-2 right-2 btn btn-primary h-8 w-8 rounded-full'>01</p>
                        <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto'><img src={userIcon} alt="" className='w-10 h-10 mx-auto' /></div>
                        <h3 className='font-bold text-lg'>Create Account</h3>
                        <p className='text-sm text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='card bg-base-100 shadow-sm rounded-lg p-6 relative text-center space-y-4 aspect-auto'>
                        <p className='absolute top-2 right-2 btn btn-primary h-8 w-8 rounded-full'>02</p>
                        <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto'><img src={packageIcon} alt="" className='w-10 h-10 mx-auto' /></div>
                        <h3 className='font-bold text-lg'>Choose Products</h3>
                        <p className='text-sm text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='card bg-base-100 shadow-sm rounded-lg p-6 relative text-center space-y-4 aspect-auto'>
                        <p className='absolute top-2 right-2 btn btn-primary h-8 w-8 rounded-full'>03</p>
                        <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto'><img src={rocketIcon} alt="" className='w-10 h-10 mx-auto' /></div>
                        <h3 className='font-bold text-lg'>Start Creating</h3>
                        <p className='text-sm text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Steps;