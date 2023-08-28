import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Desde About</h1>
      <button onClick={() => navigate(1)}>Go foward</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
