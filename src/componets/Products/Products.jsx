import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import CartItems from './CartItems';

const Products = ({productsPromise}) => {
    const products = use(productsPromise);
    const [activeProduct,setActiveProduct ] = useState('products')
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    }
    const handleRemoveFromCart = (index) => {
        const newCart = cartItems.filter((item,idx) => index !== idx);
        setCartItems(newCart);
    }
    const handleCheckout = () => {
        setCartItems([]);
    }
    return (
        <div>
            <div className='max-w-6xl mx-auto py-10 text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex items-center justify-center gap-4'>
                    <button onClick={() => setActiveProduct('products')} className={activeProduct === 'products' ? 'btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none' : 'btn btn-ghost rounded-full'}>Products</button>
                    <button onClick={() => setActiveProduct('cart')} className={activeProduct === 'cart' ? 'btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-purple-500 border-none' : 'btn btn-ghost rounded-full'}>Cart ({cartItems.length})</button>
                </div>
            </div>
            <div className='max-w-6xl mx-auto py-10 px-4'>
                {
                    activeProduct === 'products' ?(<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        products.map(( product) => (<ProductCard key={product.id} name={product.name} description={product.description} price={product.price} period={product.period} tag={product.tag} tagType={product.tagType} features={product.features} icon={product.icon} addToCart={
                            handleAddToCart
                        } product={product}/>))
                    }
                    </div>) :<CartItems cartItems={cartItems} removeFromCart={handleRemoveFromCart} onCheckout={handleCheckout} />
                }
                
            </div>
            
        </div>
    );
};

export default Products;