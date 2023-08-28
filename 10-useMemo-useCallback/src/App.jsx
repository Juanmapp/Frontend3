import { useState } from 'react'
import Memo from "./Memo"
import Callback from "./Callback"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Callback/>
      <Memo/>
    </>
  )
}

export default App
