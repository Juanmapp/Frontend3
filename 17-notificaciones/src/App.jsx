import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const MySwal = withReactContent(Swal);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const request = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(username);
        }, 2000);
      });
    //       const request = () =>
    // new Promise((resolve, reject) => {
    // setTimeout(() => {
    // // Rechazamos la promesa
    // reject("Error");
    // }, 2000);
    // });

    //Probamos SweetAlert2

    try {
      const response = await request();

      MySwal.fire({
        icon: "success",
        title: `Registro Exitoso. Bienvenido ${response}`,
      });
    } catch (error) {
      1;

      MySwal.fire({
        icon: "error",
        title: "Ha ocurrido un error. Intente nuevamente",
      });
    }

    //Probamos Toastify
    //   try {
    //     const response = await request();

    //     toast(`Registro Exitoso. Bienvenido ${response}`);
    //   } catch (error) {
    //     toast("Ha ocurrido un error. Intente nuevamente");
    //   }
  };

  return (
    <div className="App">
      <h1>Notifiaciones</h1>
      <ToastContainer />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default App;
