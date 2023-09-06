import { useContext } from "react";
import { useState } from "react";

import "./App.css";
import { UserContext } from "./context";

function App() {
  const userContext = useContext(UserContext);

  const { user, changeUser } = userContext;

  const [input, setInput] = useState(user.username);

  const onClick = async () => {
    const data = await fetch(`https://api.github.com/users/${input}`);
    const json = await data.json();

    const { name, avatar_url, html_url, login } = json;

    changeUser({ name, avatar_url, html_url, username: login });
  };

  return (
    <div className="App">
      <h1>Perfil de Github</h1>
      <div>
        <input
          placeholder="Ingrese el nombre de usuario"
          defaultValue={user.username}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onClick}>Ver perfil</button>
        <section>
          <h3>{user.name}</h3>
          <h4>{user.username}</h4>
          <img src={user.avatar_url} alt={user.name} />
          <a href={user.html_url} target="blank" rel="noreferrer">
            Ver perfil completo{" "}
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
