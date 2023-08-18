import { useState } from "react"
import "../styles/form.css"
export default function Form({onAddUser}) {

    const [cancion, setCancion] = useState("")
    const [artista, setArtista] = useState("")
    const [nombre, setNombre] = useState("")

    function handleSubmit (e){
        e.preventDefault()
        onAddUser({cancion,artista,nombre})
        setCancion("")
        setArtista("")
        setNombre("")        
 
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>CANCIONES FAVORITAS </h2>
            
            <input type="text" placeholder="Ingrese su canción favorita" value={cancion} onChange={(e) => setCancion(e.target.value)}/>
            <input type="text" placeholder="Ingrese su artista favorito" value={artista} onChange={(e) => setArtista(e.target.value)}/>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
            <button type="submit">Enviar</button>
            

        </form>
    )

}