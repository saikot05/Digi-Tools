
import { useState } from 'react'
import './App.css'
import Bannar from './componets/Bannar/Bannar'
import Footer from './componets/Footer/Footer'

import Navbar from './componets/navbar/Navbar'
import PricingSection from './componets/PricingSection/PricingSection'
import Products from './componets/Products/Products'
import ReadyToCall from './componets/ReadyToCall/ReadyToCall'
import Stats from './componets/Stats/Stats'
import Steps from './componets/Steps/Steps'

const products = async () =>{
    const res = await fetch("/product.json");
    return res.json();
}
const productsPromise = products();

function App() {
const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Bannar />
      <Stats />
      <Products productsPromise={productsPromise} cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <PricingSection />
      <ReadyToCall />
      <Footer />
    </>
  )
}

export default App
