import React from "react";
import NumberList from "./NumberList"

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

  return (
    <div className="App">
    <ul>
      {listItems}
      <NumberList numbers={numbers} />
    </ul>  
    </div>
  );
}

export default App;
