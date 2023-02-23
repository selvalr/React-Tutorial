import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberList1 from './Keys';
import Blog from "./Blog.js"

let Mynum=[1,2,3,4,5,6,7,8,9]

let myno=[{title:"hello"},{title:"selva"}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NumberList1 numbers={Mynum}></NumberList1>
    <Blog posts={myno}></Blog>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
