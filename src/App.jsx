
import './App.css'
import Bannar from './componets/Bannar/Bannar'

import Navbar from './componets/navbar/Navbar'
import Products from './componets/Products/Products'
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
    </>
  )
}

export default App
