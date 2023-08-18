import { useEffect , useState } from 'react'
import './App.css'
import GetResizeFromWindow from './GetResizeFromWindows'
import Saludo from './Saludo'

function App() {
  const [title, setTitle] = useState(
    "Certified Tech Developer | Digital House"
  )
  const [nombre, setNombre] =useState("")


  useEffect(() => {
    document.title = title
  }, [title])

  const handleChange = (e) => {
    setTitle(e.target.value)
   
  }

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }
 
  useEffect(() => {
    function handleResize() {
    console.log(
    "Redimensionar: ",
    window.innerWidth,
    "x",
    window.innerHeight
    );
    }
    
    window.addEventListener("resize", handleResize);
    
    3
    
    });


    
    
      
  return (
    <>
      <h1>Practicando useEffect</h1>
      <form action="">
      <input type="text" placeholder='ingrese su titulo' onChange={handleChange}/>
      <input type="text" placeholder='ingrese su nombre' onChange={handleNombre} value={nombre} />
      
      </form>
      <GetResizeFromWindow/>
      <Saludo nombre={nombre}/>
    </>
  )
}

export default App
