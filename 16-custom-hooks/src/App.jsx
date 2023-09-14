import { useState } from 'react'

import './App.css'
import DogImage from './DogImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejemplo de uso de useFetch</h1>
      <DogImage />
    </>
  )
}

export default App
