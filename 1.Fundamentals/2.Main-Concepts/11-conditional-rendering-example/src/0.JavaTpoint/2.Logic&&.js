import React from "react";

/*
{  
    condition &&  
    // whatever written after && will be a part of output.  
}  
*/

function Example() {
  return <div>{10 > 5 && alert("This alert will be shown!")}</div>;
}

export default Example;
