import { useState } from "react"
import "../styles/form.css"
export default function Form({onAddUser}) {

    const [nombre, setNombre] = useState("")
    const [cancion, setCancion] = useState("")
    const [artista, setArtista] = useState("")

    function handleSubmit (e){
        e.preventDefault()
        
       
        onAddUser({nombre,cancion,artista})
        if (nombre < 2) {

        }
        setNombre("")
        setCancion("")
        setArtista("")
        console.log("excelente");
        
 
    }



    

    return (
        <form onSubmit={handleSubmit}>
            <h2>CANCIONES FAVORITAS </h2>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <input type="text" placeholder="Ingrese su canción favorita" value={cancion} onChange={(e) => setCancion(e.target.value)}/>
            <input type="text" placeholder="Ingrese su artista favorito" value={artista} onChange={(e) => setArtista(e.target.value)}/>
            
            <button type="submit">Enviar</button>
            

        </form>
    )

}