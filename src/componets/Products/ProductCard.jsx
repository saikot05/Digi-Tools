import React from 'react';
import { FaCheck } from 'react-icons/fa';
const tagColors = {
    'best-seller' : 'bg-orange-100 text-orange-500',
    'popular' : 'bg-purple-100 text-purple-500',
    'new' : 'bg-green-100 text-green-500',
}
const periodText ={
    'monthly' : '/Mo',
    'yearly' : '/Yr',
    'one-time' : '/One-Time',
}
const ProductCard = ({ name, description, price, period, tag, tagType, features, icon }) => {
    return (
        <div className='card bg-base-100 shadow-sm rounded-lg p-6'>
            <div className='space-y-5'>
                <div className='flex items-center justify-between'>
                    <img src={icon} alt={name} className='w-10 h-10 object-contain' />
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${tagColors[tagType]}`}>
                        {tag}
                    </span>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>{name}</h3>
                    <p className='text-sm text-[#627382]'>{description}</p>
                </div>
                <div>
                    <span className='text-2xl font-bold'>${price}</span>
                    <span className='text-sm text-[#627382]'>{periodText[period]}</span>
                    <ul className='space-y-2 mt-2'>
                        {  
                            features.map((feature, index)=><li key={index} className='flex items-center gap-2 text-sm text-[#627382]'><FaCheck className='text-green-500'/> {feature}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <button className='btn w-full btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none'>Buy Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default ProductCard;