import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {
  
  const {state, dispatch} = useContext(ContextGlobal)

  const {theme} = state

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <nav className={theme === "dark" ? "dark" : ""}>
      <Link to="/Home">Home</Link>

      <Link to="/Contacto">Contact</Link>

      <Link to="/Favs">Favs</Link>

      {/* Este hay que hacerlo en card */}

      <Link to="/Dentist/:id">Detail</Link>

      <Outlet />
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
      onClick={toggleTheme}
      
      >Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}</button>
    </nav>
  );
};

export default Navbar;
