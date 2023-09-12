import { useContext } from "react"
import { CounterContext } from "./Context"


const Counter = () => {
    const { state, dispatch} = useContext(CounterContext)

    return (
        <div>
            <h1>Valor : {state.count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Incrementar
                </button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Decrementar</button>
        </div>
    )
}
export default Counter

