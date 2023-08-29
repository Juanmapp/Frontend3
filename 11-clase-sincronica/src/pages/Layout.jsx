import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/Blogs">Blogs</Link>
            <Link to="/Contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  );
}
