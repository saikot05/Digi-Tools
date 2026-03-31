
import './App.css'
import Bannar from './componets/Bannar/Bannar'

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
  

  return (
    <>
      <Navbar />
      <Bannar />
      <Stats />
      <Products productsPromise={productsPromise} />
      <Steps />
      <PricingSection />
      <ReadyToCall />
    </>
  )
}

export default App
