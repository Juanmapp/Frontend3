import { memo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import React from "react";

const Button = React.memo(({ handleClick, name }) => {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
});

const Counter = () => {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memoizedSetCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoizedSetCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={memoizedSetCountOne} name="button1" />
      <Button handleClick={memoizedSetCountTwo} name="button2" />
    </>
  );
};

export default Counter;
