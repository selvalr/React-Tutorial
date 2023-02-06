import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const element = <h1>Hello, world!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

const name = "Josh Perez";
const element1 = <h1>Hello, {name}</h1>;
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(element1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
