import {useState} from "react"
function Productos({products}) {
    const [lista, setLista] = useState(0)
    return(
        <div>
            <h2>Productos en la lista : {lista}</h2>
            <button onClick={()=>setLista(lista+1)}>Aumentar Productos</button>
            <p>{products.map(product =>{
                return (
                    <li key={product.id}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                      />
                        <p>{product.title}</p>
                      </li>)
                
            })}</p>
        </div>
    )
}

export default Productos;