import { useState, memo, useMemo } from "react";
import ShowValue from "./ShowValue";

const MemoShowValue = memo(ShowValue);
export default function Memo() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("ON");
  const params = useMemo(() => ({ value }), [value]);

  console.log(`App re-render, ${counter}`);

  const changeCounter = () => {
    setCounter(counter + 1);
  };

  const changeValue = () => {
    setValue(value === "ON" ? "OFF" : "ON");
  };

  return (
    <div className="container">
      <h1>Exemplo useMemo </h1>
      <div className="items">
        <MemoShowValue params={params} />
      </div>
      <div className="actions">
        <button onClick={changeCounter} className="btn btn-teal">
          Re-render
        </button>

        <button onClick={changeValue} className="btn btn-sky">
          Change Value
        </button>
      </div>
    </div>
  );
}
