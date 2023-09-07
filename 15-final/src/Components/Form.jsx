import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({});
  const [mensaje, setMensaje] = useState(false);
  const [error, setError] = useState(false);

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleName = () => {
    setUsuario({ ...usuario, name: event.target.value });
    console.log(usuario);
  };
  const handleMail = () => {
    setUsuario({ ...usuario, mail: event.target.value });
    console.log(usuario);
  };

  //Aqui deberan implementar el form completo con sus validaciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.name.length > 5 && validEmail.test(usuario.mail)) {
      setMensaje(true);
      setError(false);
    } else {
      setMensaje(false);
      setError(true);
    }
  };
  // useEffect(() => {
  //   console.log(usuario);
  // }, [usuario]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Fullname" onChange={handleName} />
        <input type="mail" placeholder="Mail" onChange={handleMail} />
        <button type="submit">Send</button>
      </form>
      {mensaje && (
        <h2>Gracias {usuario.name}, te contactaremos cuando antes vía mail</h2>
      )}
      {error && <h2>Por favor verifique su información nuevamente</h2>}
    </div>
  );
};

export default Form;
