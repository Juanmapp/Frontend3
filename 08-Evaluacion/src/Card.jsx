import "./card.css"

export default function Card({usuario}) {

    return(
        <div className="result">
            <h4>Hola {usuario.nombre}!</h4>
            <p>Sabemos que te gusta mucho la cancion {usuario.cancion} de {usuario.artista}</p> 
        </div>
    )
}