import React from "react";
import ReactDOM from "react-dom/client";

//1.Rendering an Element into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
const element1 = <h1>Hello, world</h1>;
root.render(element1);

//2.Updating the Rendered Element

const roots = ReactDOM.createRoot(document.getElementById("root1"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  roots.render(element);
}

setInterval(tick, 1000);
