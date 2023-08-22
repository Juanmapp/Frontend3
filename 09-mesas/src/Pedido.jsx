import { useEffect, useState } from "react"

export default function Pedido() {

    const [comida, setComida] = useState("")
    
    useEffect(() => {

    console.log("Se monto el componente");
    setTimeout(() => {
        setComida("No hay comida ingresada")
    },2000)

    }, [])


    function handleClick() {
        alert("Pedido cancelado")
        
        setComida("")
    }

    function handleSubmit(e) {
        e.preventDefault()
        setComida(comida)
    }
    function handleChange(e) {
    
        setComida(e.target.value)
        console.log(comida);
    }


    return (
        <div>
            <h2>{comida}</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su comida" onChange={handleChange} />
            <button type="submit">Enviar</button>
            <button onClick={handleClick}>Eliminar pedido</button>
            </form>
            </div>
    )
}