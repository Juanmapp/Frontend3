import { useContext } from "react";
import React from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  const { theme } = state;
  return (
    <footer className={theme === "dark" ? "dark" : ""}>
      <p>Powered by</p>

      <img src="../../public/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
