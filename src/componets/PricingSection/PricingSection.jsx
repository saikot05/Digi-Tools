import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto py-10 px-4 text-center space-y-4'>
                <div className='text-center mb-8 space-y-3'>
                    <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                    <p className='text-sm text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-6 py-6 space-x-4'>
                    <div className='card bg-gray-100 shadow-sm rounded-lg  p-6 space-y-3 text-left flex flex-col justify-between'>
                        <h3 className='text-xl font-bold'>Starter</h3>
                        <p className='text-sm text-[#627382]'>Perfect for getting started</p>
                        <div className='flex items-end gap-1'>
                            <span className='text-4xl font-bold'>$0</span>
                            <span className='text-sm text-[#627382]'>/Month</span>
                        </div>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Access to 10 free tools</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Basic templates</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Community support</li>  
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> 1 project per month</li>
                        </ul>
                        <button className='btn w-full btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none'>Get Started Free</button>
                    </div>
                    <div className='card bg-gradient-to-b from-[#4F39F6] to-purple-500 shadow-sm rounded-lg p-6 text-center space-y-2 relative text-white text-left lg:scale-105'>
                        <span className='absolute -top-4 right-1/2 translate-x-1/2 bg-yellow-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full' >Most Popular</span>
                        <h3 className='text-xl font-bold'>Pro</h3>
                        <p className='text-sm'>Best for professionals</p>
                        <div>
                            <span className='text-4xl font-bold'>$29</span>
                            <span className='text-sm '>/Month</span>
                        </div>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 text-sm'><FaCheck/> Access to all premium tools</li>
                            <li className='flex items-center gap-2 text-sm'><FaCheck/> Unlimited templates</li>
                            <li className='flex items-center gap-2 text-sm'><FaCheck /> Priority support</li>
                            <li className='flex items-center gap-2 text-sm'><FaCheck /> Unlimited projects</li>
                            <li className='flex items-center gap-2 text-sm'><FaCheck /> Cloud sync</li>
                            <li className='flex items-center gap-2 text-sm'><FaCheck /> Advanced analytics</li>
                        </ul>
                        <button className='btn w-full bg-white text-purple-600 rounded-full border-none font-bold'>Start Pro Trial</button>   
                    </div>
                    <div className='card bg-gray-100 shadow-sm rounded-lg p-6 text-center space-y-2 text-left'>
                        <h3 className='text-xl font-bold'>Enterprise</h3>
                        <p className='text-sm text-[#627382]'>For teams and businesses</p>
                        <div>
                            <span className='text-4xl font-bold'>$99</span>
                            <span className='text-sm text-[#627382]'>/Month</span>
                        </div>
                             
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Everything in Pro</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Team collaboration</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Custom integrations</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Dedicated support</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> SLA guarantee</li>
                            <li className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> Custom branding</li>
                        </ul>
                        <button className='btn w-full btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none'>Contact Sales</button>       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;