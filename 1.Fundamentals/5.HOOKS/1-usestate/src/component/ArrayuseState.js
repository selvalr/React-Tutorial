import React from "react";
import { useState } from "react";

function UseStateArray() {
  const [data, setData] = useState([]);
  const items = ["dhoni", "kohli", "rohit", "rishab"];

  const addPlayers = () => {
    setData(items);
  };

  const addOnePlayer = () => {
    const bowler = ["natarajan"];
    setData([...data, bowler]);
  };

  return (
    <div>
      <p>
        {data.length &&
          data.map((items) => {
            return <li>{items}</li>;
          })}
      </p>
      <button onClick={addPlayers}>Add Players </button>
      <button onClick={addOnePlayer}>Add One More Player </button>
    </div>
  );
}
export default UseStateArray;
