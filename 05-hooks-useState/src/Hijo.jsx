function Hijo({count, setCount}) {


    return (
        <div>
            <h2>El valor del contador es : {count}</h2>
            <button onClick={()=> setCount(count+1)}>Aumentar</button>
            </div>
        
    )
}

export default Hijo;