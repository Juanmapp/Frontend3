import {
  BrowserRouter, Route, Link, Routes, useNavigate, useParams
} from "react-router-dom"

import './App.css'
import { useState } from "react"

const products = [
  {id:1, name:"Producto 1", description:"Descripcion del producto 1"},
  {id:2, name:"Producto 2", description:"Descripcion del producto 2"},
  {id:3, name:"Producto 3", description:"Descripcion del producto 3"},
  {id:4, name:"Producto 4", description:"Descripcion del producto 4"},
  {id:5, name:"Producto 5", description:"Descripcion del producto 5"},

]
function ProductList() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProductDetail() {
  const {productId} = useParams()
  const navigate = useNavigate()
  const productIndex = products.findIndex((product) => product.id==parseInt(productId))

  
  const product= products[productIndex]
  

  const handleNextProduct = () => {
    const nexProductIndex = (productIndex +1) % products.length
    navigate(`/products/${products[nexProductIndex].id}`)
    }
  
    const handlePrevProduct = () => {
      const prevProductIndex = (productIndex -1 + products.length) % products.length 
      navigate(`/products/${products[prevProductIndex].id}`)
      }

      return (
        <div>
      <h2>Detalles de Productos</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={handlePrevProduct}>Anterior</button>
      <button onClick={handleNextProduct}>Sigueinte</button>

      
    </div>
      )
  
}

function App() {


  return (
    <BrowserRouter>
    <div className="App"></div>
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Products">Productos</Link>
        </li>
        
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<h2>Pagina de inicio</h2>}/>
      <Route path="Products" element={<ProductList/>}/>
      <Route path="Products/:productId" element={<ProductDetail/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
