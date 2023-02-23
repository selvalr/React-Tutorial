
import React from "react";

function App(props) {
 const hl=props.myvalue;
  const listOfValue=hl.map((data)=>{
    return <li>{data}</li>
  })
  return (
    <div className="App">
     <ul>{listOfValue}</ul>
    </div>
  );
}

export default App;
