import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const { theme } = state;
  const dataDentist = JSON.parse(localStorage.getItem("dentists"));
  console.log(dataDentist);

  // Solucionar el problema de que la card se sigue renderizando aunque lo quites de favorito

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {dataDentist &&
          dataDentist.map((medico) => (
            <Card
              key={medico.dentistId}
              name={medico.dentistName}
              username={medico.dentistUsername}
              id={medico.dentistId}
            />
          ))}
      </div>
    </div>
  );
};

export default Favs;