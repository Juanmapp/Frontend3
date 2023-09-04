import { useContext } from "react";
import ThemeContext from "../context";

export default function Navbar() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <p>Inicio</p>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Change theme
      </button>
    </div>
  );
}
