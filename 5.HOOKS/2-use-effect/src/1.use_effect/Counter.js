//Some examples of side effects are: fetching data, directly updating the DOM, and timers.

//syntax: useEffect(<function>, <dependency>)

import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // //Type:1 Execute on render and all state change
  // useEffect(() => {
  //   console.log("use effect called");
  // });

  // //Type:2 Execute on render and all dependency state change
  // useEffect(() => {
  //   console.log("use effect called");
  // }, [count]);

  //Type:3 Execute on render
  useEffect(() => {
    console.log("use effect called");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <h1>{count1}</h1>

      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount1(count1 + 1)}>add 2</button>
    </>
  );
}

export default Example;
