import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Garage from "./Compoincompo";

import Car from "./ClassCompo";
import FuncCompo from "./FuncCompo";
import Welcome from "./function_component/function_component";
import Welcome1 from "./class_component/class_compo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Car />
    <FuncCompo />
    <Welcome name="audi" />
    <Welcome1 name="selva" />
    <Garage />
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Garage />);
