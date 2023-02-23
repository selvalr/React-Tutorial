import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Welcome from "./App";
import Employee1 from "./employee";
import Employee2 from "./employee";
/*
//syntax:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//syntax:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

*/

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
  <React.StrictMode>
    <Welcome name="ravi" age={21} />
    <Employee1 name="selva" id={23}></Employee1>
    <Employee2 name="bass" age={33}></Employee2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
