import React , {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {
  const {state, dispatch} = useContext(ContextGlobal)
  
    const {theme} = state

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
