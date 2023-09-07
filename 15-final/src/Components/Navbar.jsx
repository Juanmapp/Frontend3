import React from "react";
import { Link, Outlet } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <Link to="/Home">Home</Link>

      <Link to="/Contacto">Contact</Link>

      <Link to="/Favs">Favs</Link>

      {/* Este hay que hacerlo en card */}

      <Link to="/Dentist/:id">Detail</Link>

      <Outlet />
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
