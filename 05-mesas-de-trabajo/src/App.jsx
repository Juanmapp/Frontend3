import './App.css'
import Productos from './Productos'
import {products } from "./mocks/productos.json"


function App() {



  return (
    <>
      
      <Productos products={products} />
    </>
  )
}

export default App
