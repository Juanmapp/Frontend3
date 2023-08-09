import { useState } from "react"
import "./Rejuvenecedor.css"

export default function Rejuvenecedor() { 

    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")

    const handleChangeUser = (e) => {
        setUserName(e.target.value)
    }
    
    const handleChangeAge = (e) => {
        setUserAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValidUser = validateUser(userName)
        const isValidAge = validateAge(userAge)
        

        if (!isValidUser || !isValidAge) {
            alert("Algun dato ingresado es incorrecto")
        } else {
            console.log(userAge);
        setUserAge((userAge) => userAge - 10)
        // Porque no se modifica la edad del usuario
        console.log(userAge);
        alert(`Bienvenido ${userName}, tu nueva edad es de ${userAge}`)
       document.querySelector(".form").reset()
       // Porque no se resetea el form
    }
    } 

    const validateUser = (userName) => {
        const withOutSpaces = userName.trim()
        
        if (withOutSpaces.length > 0) {
            return true
        } else {
            return false
        }
        
    }
    
    const validateAge = (userAge) => {
        console.log(isNaN(userAge), "ageee");
        if (isNaN(userAge)) {
            return false
        } else {
           return true
        }
    }
    

 

    
    return (
        <form onSubmit={handleSubmit} className="form">
            
            <p>Ingrese su nombre</p>
            <input type="text" placeholder="Nombre de usuario" value={userName} onChange={handleChangeUser}/>
            <p>Ingrese su edad</p>
            <input type="text" placeholder="Ingrese su edad" value={userAge} onChange={handleChangeAge} />
            

            <button type="submit" >Enviar</button>
        </form>
    )
 } 