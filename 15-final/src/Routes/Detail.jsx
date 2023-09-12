import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const { theme } = state;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
