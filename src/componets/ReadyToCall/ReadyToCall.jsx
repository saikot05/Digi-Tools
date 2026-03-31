import React from 'react';
import { LuDot } from 'react-icons/lu';

const ReadyToCall = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-purple-500'>
            <div className='max-w-6xl mx-auto py-20 px-4  text-white space-y-6 text-center'>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold'>Ready To Transform Your Workflow?</h2>
                    <p className='text-sm text-purple-200'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <button className='btn rounded-full bg-white text-purple-600 border-none font-bold'>Explore Products</button>
                    <button className='btn rounded-full border-white text-white bg-transparent hover:bg-white hover:text-purple-600'>View Pricing</button>
                </div>
                <p className='text-xs text-purple-200 flex justify-center items-center'>14-day free trial <LuDot /> No credit card required <LuDot /> Cancel anytime</p>
            </div>
        </div>
    );
};

export default ReadyToCall;