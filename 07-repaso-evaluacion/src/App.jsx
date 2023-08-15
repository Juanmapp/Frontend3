import { useState } from 'react'
import Form from "./Form.jsx"
import Turnos from "./Turnos.jsx"

import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([])

  const addPatient = (patient) => {
    setPacientes([...pacientes, patient])
  }

  return (
    <div className='App'>
      <h1>Registro de pacientes</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>

    </div>
  )
}

export default App
