import Event from "./Event"
import Form from "./Form"

import './App.css'


function App() {

  return (
    <div className="App">
      <h2>Conociendo eventos y formularios en React</h2>
      <Event />
      <Event numero="1"/>
      <Event numero="2"/>
      <Form/>
    </div>
  )
}

export default App
