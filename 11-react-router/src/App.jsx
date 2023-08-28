import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/Home">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/Faqs">Faqs</Link>
        </nav>
        <Outlet />
      </header>
      <footer>
        <h2>Prueba de React-Router</h2>
      </footer>
    </div>
  );
}

export default App;
