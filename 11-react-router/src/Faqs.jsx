import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import preguntasRespuestas from "./Preguntas";

export default function Faqs() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Desde Faqs</h1>

      <ol>
        {preguntasRespuestas.map((pregunta) => (
          <Link key={pregunta.id} to={`/Faqs/${pregunta.id}`}>
            <li>{pregunta.title}</li>
          </Link>
        ))}
      </ol>
      <button onClick={() => navigate(1)}>Go foward</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
