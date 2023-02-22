import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//JSX is a JavaScript XML

//difference HTML vs JSX

//class use HTML  - className use JSX
//onclick in HTML - onClick(camelCase all events) in JSX
//<img> not closed img tag - <img /> (self closing tag)

const element = <h1 className="heading">Hello, world!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//jsx expression used this way:{}
const name = "Josh Perez";
const element1 = <h1>Hello, {name}</h1>;
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(element1);
