import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect (() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=65911ee5")
    .then(resp => resp.json()
    .then(data => 
      console.log(data)
      ))  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
