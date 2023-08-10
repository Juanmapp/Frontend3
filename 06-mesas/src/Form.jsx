import { useState } from "react";
import "./Form.css"

function Form() {
    
    const [usuario, setUsuario] = useState({
        nombre: "", 
        apellido: "",
        pokemon: ""
    });

    function handleNombre(e) {
        setUsuario({...usuario, nombre:e.target.value});
    }
    function handleApellido(e) {
        setUsuario({...usuario, apellido:e.target.value});
    }
    function handlePokemon(e) {
        setUsuario({...usuario, pokemon:e.target.value});
    }

    function registrar(e) {
        e.preventDefault()
        alert("Datos enviados: " + usuario.nombre + ", " + usuario.apellido + ", " + usuario.pokemon)
        document.querySelector("form").reset()
    }

    return (
        <div>
            <form onSubmit={registrar}>
                <input type="text" placeholder="Ingresa tu nombre" onChange={handleNombre} />
                <input type="text" placeholder="Ingresa tu apellido" onChange={handleApellido} />
                <input type="text" placeholder="Ingresa tu pokemon favorito" onChange={handlePokemon} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default Form;