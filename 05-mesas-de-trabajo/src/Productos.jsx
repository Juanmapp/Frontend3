import {useState} from "react"
import productos from "./mocks/productos.json"
function Productos() {
    const [lista, setLista] = useState(0)
    const productosFinal = productos.products;

    function handleClick() {
      if (lista < productosFinal.length -1) {
      setLista(lista+1)
      }
      alert("No hay mas productos")
    }



    return(
        <div>
            <h2>Productos en la lista : {lista}</h2>
            <button onClick={handleClick}>Aumentar Productos</button>
            <ul>{productosFinal.length > 0 && (
        productosFinal.map((producto, index) => (
          index === lista && (
                    <li key={producto.id}>
                      <img
                        src={producto.thumbnail}
                        alt={producto.title}
                      />
                        <p>{producto.title}</p>
                      </li>)
                
            )))}
            
            
        </ul>
        </div>
    )
}

export default Productos;