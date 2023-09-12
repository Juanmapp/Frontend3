import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    
  }

  return (
    <div className="card">

        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" alt="" width="200px" />
        <h4>{name}</h4>
        <p>{username}</p>
        <p>{id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
