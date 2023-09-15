import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <nav className={theme === "dark" ? "dark" : ""}>
      <div>
        <h1>Clinica Odontologica</h1>
      </div>
      <div className="link-container">
        <Link to="/">Home</Link>

        <Link to="/Contacto">Contact</Link>

        <Link to="/Favs">Favs</Link>

        <Outlet />
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>
          Modo {theme === "light" ? "oscuro" : "claro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
