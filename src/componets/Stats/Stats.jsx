import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-purple-500 py-10'>
            <div className='max-w-6xl mx-auto flex items-center justify-around'>
                <div className='text-white text-center'>
                    <h2 className='text-4xl font-bold'>50K+</h2>
                    <p className='text-sm mt-1'>Active Users</p>
                </div>
                <div className='h-12 w-[1px] bg-white opacity-40'></div>
                <div className='text-white text-center'>
                    <h2 className='text-4xl font-bold'>200+</h2>
                    <p className='text-sm mt-1'>Premium Tools</p>
                </div>
                <div className='h-12 w-[1px] bg-white opacity-40'></div>
                <div className='text-white text-center'>
                    <h2 className='text-4xl font-bold'>4.9</h2>
                    <p className='text-sm mt-1'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;