import { useState , useEffect} from 'react'

import './App.css'

function App() {

  const [dogImage, setDogImage] = useState("")
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => {
      setDogImage(data.message)
      setLoader(false)
    })
    .catch((error) => {
      console.error("Error al obtener la imagen: ", error)
    })
  }, [])

  return (
   <div className='App'>
      <h1>Mirandoperros.com</h1>
      {loader ? (
        <p>Cargando...</p>
      ): (
        <div>
          <img src={dogImage} alt="Imagen perro" />
        </div>
      )}
   </div>
  )
}

export default App
