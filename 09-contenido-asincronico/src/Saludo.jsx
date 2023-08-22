import { useEffect } from "react"

export default function Saludo({nombre}){
    
    const mensaje =  `Bienvenido ${nombre}` 

    useEffect(() => {

        document.title = `Saludos, ${nombre}`

    }, [nombre])

    return(
        <div>{mensaje}</div>
    )
}