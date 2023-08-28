import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Desde Home</h1>

      <button onClick={() => navigate(1)}>Go foward</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
