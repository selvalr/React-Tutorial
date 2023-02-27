/*syntax:
   const [state, dispatch] = useReducer(reducer, initialArg, init);
*/

import React, { useReducer } from "react";

const transactionReducer = (state, action) => {
  //2
  switch (action.type) {
    case "WITHDRAW":
      return state - action.payload;
    case "DEPOSIT":
      return state + action.payload;
    default:
      return state;
  }
};

function Reducer() {
  const withdraw = (amount) => {
    //3
    dispatch({ type: "WITHDRAW", payload: amount });
  };

  const deposit = (amount) => {
    //4
    dispatch({ type: "DEPOSIT", payload: amount });
  };

  const [state, dispatch] = useReducer(transactionReducer, 1000); //1

  return (
    <>
      <h3>{`balance ${state}`}</h3>
      <button onClick={() => withdraw(500)}>Withdraw</button>
      {/*5 */}
      <button onClick={() => deposit(500)}>deposit</button>
      {/*6 */}
    </>
  );
}

export default Reducer;
