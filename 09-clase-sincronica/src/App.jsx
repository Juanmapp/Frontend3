import { useState, useEffect } from 'react'


import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [forzador, setForzador] = useState(false)

  useEffect(() => {
    console.log("El componente se monto");
  }, [])

  useEffect(() => {
    console.log("El componente se actualizo");
  })

  useEffect(() => {
   console.log("El contador se incremento"); 
  },[contador])

  function handleForzador() {
    setForzador(!forzador)
  }

  return (
    <div>
      <h1>Ejemplo de useEffect</h1>
      <p>contador : {contador}</p>
      <button onClick={()=> setContador(contador+1)}>Incrementar</button>
      <button onClick={handleForzador}>Forzar render</button>
    </div>
  )
}

export default App
