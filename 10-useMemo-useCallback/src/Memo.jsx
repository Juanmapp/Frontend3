import { useState,useMemo } from "react"

export default function Memo() {

    const [numero, setNumero] = useState(10)
const cuadrado = useMemo(() => {
    return numero * numero
},[numero])

return (
    <div className="App">
        <h1>ejemplo UseMemo</h1>
        <p>Numero : {numero}</p>
        <p>Cuadrado : {cuadrado}</p>
        <button onClick={() => setNumero(numero+1)}>Incrementar</button>
    </div>
)
}