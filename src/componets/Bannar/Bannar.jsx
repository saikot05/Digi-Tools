import React from 'react';
import bannarImg from '../../assets/banner.png';
import playIcon from '../../assets/play.png';
import circleIcon from '../../assets/products/circle.png';
const Bannar = () => {
    return (
        <div className='max-w-6xl mx-auto w-full flex items-center justify-between gap-8 py-20'>
            <div className='space-y-3'>
                <button className='btn btn-primary btn-soft rounded-full flex items-center gap-2'><img src={circleIcon} alt="" />New: AI-Powered Tools Available</button>
                <h2 className='text-4xl font-bold'>Supercharge Your <br />Digital Workflow</h2>
                <p className='text-[#627382] text-sm'>Access premium AI tools, design assets, templates, and productivity <br /> software-all in one place.Start creating faster today. <br />Explore Products
                </p>
                <div className='gap-4 flex items-center'>
                    <button className='btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none'>Explore Products</button>
                    <button className='btn btn-outline btn-primary rounded-full flex items-center gap-2'><img src={playIcon} alt="" />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={bannarImg} alt="Banner" className='w-full max-h-[400px] object-contain' />
            </div>
        </div>
    );
};

export default Bannar;