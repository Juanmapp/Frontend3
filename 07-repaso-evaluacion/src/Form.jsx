import { useState } from "react";

export default function Form({onAddPatient}) {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre&&apellido) {
            onAddPatient({nombre,apellido})
            setNombre("")
            setApellido("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
            <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

            <button type="submit">Enviar paciente</button>
        </form>
    )

}