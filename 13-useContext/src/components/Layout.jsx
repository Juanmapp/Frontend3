import { useContext } from "react";
import ThemeContext from "../context";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
}
