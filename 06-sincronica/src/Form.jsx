import { useState } from "react";

export default function Form(){

    const [nombre, setNombre] = useState("");

    function handleNombre(e){

        setNombre(e.target.value)

    }

    function registro(e) {
        e.preventDefault();
        console.log("Usuario registrado");
        console.log(nombre);
    }

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={registro}>

                <div>
                
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre} />
                    <input type="submit" value="Enviar" />
                    
                </div>

            </form>
            
        </div>
    )

}