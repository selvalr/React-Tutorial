import React from "react";
import FullDetail from "./FullDetail";

//2.child element to employee.js and fulldetail element parent
const skills = (props) => {
  return (
    <div>
      <h1>your skills{props.skill}</h1>
      <FullDetail location="bangalore"></FullDetail>
    </div>
  );
};

export default skills;
