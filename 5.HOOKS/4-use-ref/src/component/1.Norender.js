//1.Save data without rerender

import React, { useRef, useState } from "react";

export default function Norender() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleclick = () => {
    setCounter(counter + 1);
  };

  const handleRef = () => {
    counterRef.current++;
  };

  console.log("i am rendering");

  return (
    <>
      <h1>{`counter ${counter}`}</h1>
      <h1>{`Ref ${counterRef.current}`}</h1>

      <button onClick={handleclick}>incre</button>
      <button onClick={handleRef}>handleref</button>
    </>
  );
}
