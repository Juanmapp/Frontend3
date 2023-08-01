import Hijo from "./Hijo";
function Padre() {
    return (
        <div className="Padre">
            <Hijo nombre="Pedro"/>
            <Hijo/>
            <Hijo/>

        </div>
    )
}
export default Padre