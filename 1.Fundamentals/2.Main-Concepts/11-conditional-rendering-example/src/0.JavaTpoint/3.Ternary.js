import React from "react";

/*

Syntax
condition ?  true : false
 */

function Ternary(props) {
  const isLoggedIn = props.isLoggedIn;
  return <div>Welcome {isLoggedIn ? "Back" : "Please login first"}</div>;
}

export default Ternary;
