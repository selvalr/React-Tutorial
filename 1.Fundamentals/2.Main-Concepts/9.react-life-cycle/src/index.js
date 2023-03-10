import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

// The three phases are: Mounting, Updating, and Unmounting.

//stage 1:
//constructor-->render-->componentDidMount

//stage 2:
//render-->componentDidUpdate

//stage 3:
//componentWillUnMount

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
