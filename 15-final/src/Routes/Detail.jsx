import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const params = useParams();
  const [dentist, setDentist] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then((resp) => resp.json())
    .then((data) => setDentist(data));
  }, [params.id])

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table className="table">
        <thead>
          <tr>
            <th className="user-table-header">Name</th>
            <th className="user-table-header">Email</th>
            <th className="user-table-header">Phone</th>
            <th className="user-table-header">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr key={dentist.id}>
            <td className="user-name">{dentist.name}</td>
            <td className="user-email">{dentist.email}</td>
            <td className="user-phone">{dentist.phone}</td>
            <td className="user-website">{dentist.website}</td>
          </tr>
        </tbody>
      </table>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
