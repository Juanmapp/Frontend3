import "./Card.css"

export default function Card({usuario}) {
    
    return(
        <div className="hidden" >
            
            <h3>A {usuario.nombre} le gusta mucho la cancion {usuario.cancion} de {usuario.artista}</h3> 
        </div>
    )
}