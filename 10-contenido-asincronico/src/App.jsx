import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'

function App() {
  const [vetor, setVetor] = useState([])

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments')
        const convert = await data.json()
        setVetor(convert)
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
    <h1>Practicando con apis</h1>
    <h2>Mails de la API:</h2>
      <ul>
        {vetor.map((object) => (<li type="none"> {object.email} </li>))}
        
      </ul>
    </>
  )
}

export default App
