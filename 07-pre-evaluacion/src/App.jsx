import { useState } from 'react'
import Form from "./components/Form.jsx"
import Card from "./components/Card.jsx"
import Alerta from './components/Alerta.jsx'

import './App.css'



function App() {

  const [usuario, setUsuario] = useState({})
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false)

  const agregarUsuario = (user) => {
    setUsuario(user)
    console.log(user.cancion.length);
    if (user.cancion.length > 2 && user.artista.length > 5 ) {
      setMostrarCard(true)
      setMostrarAlerta(false)
    }
    else {
      setMostrarCard(false)
      setMostrarAlerta(true)
    }
    
  }

    
  return (
    <>
      
      <Form onAddUser={agregarUsuario} />
      {mostrarCard&&<Card usuario={usuario} />}
      {mostrarAlerta&& <Alerta/>}

    </>
  )
}

export default App
