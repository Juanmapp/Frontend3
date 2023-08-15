import { useState } from 'react'
import Form from "./Form.jsx"
import Card from "./Card"
import Alerta from './Alerta.jsx'

import './App.css'

// let component = null

function App() {

  const [usuario, setUsuario] = useState({})

  const agregarUsuario = (user) => {
    setUsuario(user)
    
  }
  
  
  // const validacionDeDatos = (usuario) => {
  //   const cancionSinEspacios = usuario.cancion.trim()
   
  // if ( cancionSinEspacios.length > 2 || usuario.artista.length > 5) {
  //   return true
  // } return false }
    
  return (
    <>
      
      <Form onAddUser={agregarUsuario} usuario={usuario}/>
       <Card usuario={usuario}  />
    </>
  )
}

export default App
