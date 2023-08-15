import { useState } from "react"
import "./form.css"
export default function Form({onAddUser, usuario}) {

    const [nombre, setNombre] = useState("")
    const [cancion, setCancion] = useState("")
    const [artista, setArtista] = useState("")

    function handleSubmit (e){
        e.preventDefault()
        
        if(validacionDeDatos == true) {
        onAddUser({nombre,cancion,artista})
        setNombre("")
        setCancion("")
        setArtista("")
        console.log("excelente");
        
        }
        else {
           
                console.log("algo fallo");
            
        }
    }

    

    function validacionDeDatos() {
          
        if ( usuario.cancion.length > 2) {
          return true
        } else {
            return false }}

    

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