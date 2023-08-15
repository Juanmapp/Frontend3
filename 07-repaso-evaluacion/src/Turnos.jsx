function Turnos({pacientes}){
    return (
        <div>
            <h2>Turnos</h2>
            {pacientes.map((paciente, index) => (
                <div key={index} className="card">
                    <h3>{paciente.nombre} {paciente.apellido}</h3>
                </div>
            ))}
        </div>
    )
}
export default Turnos