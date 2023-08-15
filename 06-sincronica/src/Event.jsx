function Event({numero}){

    function miEvento() {
        console.log("Activado " + numero );
    }
    return (
        <div>
            <p>Click para ejecutar un evento</p>
            <button onClick={miEvento}>Activar</button>
        </div>
    )
}
export default Event