import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const [saved, setSaved] = useState();

  let dentist = {
    dentistId: id,
    dentistName: name,
    dentistUsername: username,
    save: false,
  };

  const addFav = () => {
    const savedDentistsJson = localStorage.getItem("dentists");
    let savedDentists = [];
    console.log(savedDentistsJson);

    if (savedDentistsJson) {
      try {
        savedDentists = JSON.parse(savedDentistsJson);
        if (!Array.isArray(savedDentists)) {
          savedDentists = [];
        }
      } catch (error) {
        console.error("Error al analizar JSON:", error);
      }
    }
    const indexToDelete = savedDentists.findIndex(
      (savedDentist) => savedDentist.dentistId === dentist.dentistId
    );
    if (
      !savedDentists.some(
        (savedDentist) => savedDentist.dentistId === dentist.dentistId
      )
    ) {
      setSaved(true);
      savedDentists.push(dentist);

      const updatedDentistsJson = JSON.stringify(savedDentists);

      localStorage.setItem("dentists", updatedDentistsJson);
      console.log(dentist.save);
    } else if (indexToDelete !== -1) {
      savedDentists.splice(indexToDelete, 1);
      setSaved(false);

      const updatedDentistsJson = JSON.stringify(savedDentists);

      localStorage.setItem("dentists", updatedDentistsJson);
    }
  };

  return (
    
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" alt="" width="200px" />
        <h4>{name}</h4>
        <p>{username}</p>
        <p>{id}</p>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        {!saved ? "Agregar a favoritos" : "Quitar de favoritos"}
      </button>
    </div>
    
  );
};

export default Card;
