/*
Example
1. No dependency passed:

useEffect(() => {
  //Runs on every render
});

*/

/*
Example
2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);

*/

/*
Example
3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
*/

import { useState, useEffect } from "react";

function Timer1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}
export default Timer1;
