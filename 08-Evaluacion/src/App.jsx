import { useState } from 'react'
import Card from "./Card.jsx"

import './App.css'

function App() {

  const [cancion, setCancion] = useState("")
  const [artista, setArtista] = useState("")
  const [nombre, setNombre] = useState("")
  
  const [usuario, setUsuario] = useState({})
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false)

    function handleSubmit (e){
        e.preventDefault()
        setUsuario({cancion,artista,nombre})
   
    let cancionSinEspacios = cancion.trim()
    if (cancionSinEspacios.length > 2 && artista.length > 5 ) {
      setMostrarCard(true)
      setMostrarAlerta(false)
    }
    else {
      setMostrarCard(false)
      setMostrarAlerta(true)
    }
        setCancion("")
        setArtista("")
        setNombre("")       
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
            <h2>CANCIONES FAVORITAS </h2>
            
            <input type="text" placeholder="Ingrese su canción favorita" value={cancion} onChange={(e) => setCancion(e.target.value)}/>
            <input type="text" placeholder="Ingrese su artista favorito" value={artista} onChange={(e) => setArtista(e.target.value)}/>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
            <button type="submit">Enviar</button>
            

        </form>
        {mostrarCard&&<Card usuario={usuario} />}
        {mostrarAlerta && (
          <div className="alert">
          <p className="msj-alert">Por favor chequea que la información sea correcta</p>
      </div>
        )}
    </>
  )
}

export default App
