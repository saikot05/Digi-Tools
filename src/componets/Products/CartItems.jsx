import React from 'react';

const CartItems = ({ cartItems,removeFromCart,onCheckout }) => {
    if(cartItems.length === 0) {
        return(<p className='card bg-base-100 shadow-sm rounded-lg p-6 text-center text-xl'>Your cart is empty!</p>)
    }
    return (
        <div className='card bg-base-100 shadow-sm rounded-lg p-6 space-y-6'>
            <h2 className='text-lg font-bold'>Your Cart</h2>
            {
                cartItems.map((item,index) => (
                    <div key={index} className='flex items-center justify-between bg-gray-50 rounded-lg p-3'>
                        <div className='flex items-center gap-4'>
                            <img src={item.icon} alt={item.name} className='w-8 h-8' />
                            <div>
                                <h3 className='text-lg font-semibold'>{item.name}</h3>
                                <p className='text-sm text-[#627382]'>${item.price}</p>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(index)} className='text-red-500 text-sm font-semibold cursor-pointer'>Remove</button>
                    </div>
                ))
            }
            <div className='flex justify-between items-center'>
                <p className='text-[#627382] text-sm'>Total:</p>
                <p className='text-lg font-semibold'>${cartItems.reduce((sum,item) => sum + item.price,0)}</p>
            </div>
            <button onClick={onCheckout} 
            className='btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none'>Procced To Checkout</button>
        </div>
    );
};

export default CartItems;