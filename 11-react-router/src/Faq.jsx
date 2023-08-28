import { useNavigate, useParams } from "react-router-dom";
import preguntasRespuestas from "./Preguntas";

export default function Faq() {
  const params = useParams();
  const pregunta = preguntasRespuestas.find(
    (pregunta) => pregunta.id === parseInt(params.id)
  );
  const navigate = useNavigate();
  return (
    <div>
      <h1>Faq : Pregunta especifica {params.id}</h1>
      <section>
        <h3>{pregunta?.title}</h3>
        <p>{pregunta?.descripción}</p>
      </section>
      <button onClick={() => navigate(1)}>Go foward</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
