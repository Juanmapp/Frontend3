import { useCallback, useState } from "react"

export default function Callback(){

    const [count, setCount] = useState(0)

const handleClick = useCallback(() => {
    setCount(count +1 )
},[count])

    return (

        <div>
        <h1>Ejemplo useCallback</h1>
        <p>Conteo: {count}</p>
        <button onClick={handleClick}>Incrementar</button>
        </div>
    )

}