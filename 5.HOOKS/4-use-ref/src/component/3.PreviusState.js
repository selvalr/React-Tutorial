import React, { useState, useRef, useEffect } from "react";

export default function PreviousState() {
  const [inputValue, setInputValue] = useState("");

  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>

      <h2>current value:{inputValue}</h2>

      <h2>Previous value:{prevRef.current}</h2>
    </>
  );
}
