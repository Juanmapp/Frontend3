import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rejuvenecedor from './Rejuvenecedor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Formulario</h2>
      <Rejuvenecedor/>
    
    </>
  )
}

export default App
