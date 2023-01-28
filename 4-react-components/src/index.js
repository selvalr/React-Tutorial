import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Garage from "./Compoincompo";
import reportWebVitals from "./reportWebVitals";
import Car from "./ClassCompo";
import FuncCompo from "./FuncCompo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Car />
    <FuncCompo></FuncCompo>
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Garage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
