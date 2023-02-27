/*
 In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

*/

import "./App.css";
import SignUp from "./0.JavaTpoint/1.if";
import Example from "./0.JavaTpoint/2.Logic&&";
import Ternary from "./0.JavaTpoint/3.Ternary";

import ConditionReturn from "./Conditionally-returning -SX/Condition-return";
import PackingList from "./If/Pack";
import Logic from "./Logic&&/Logic";
import Ternary from "./Ternay/Ternary";

function App() {
  return (
    <div className="App">
      <SignUp isLoggedIn={false} />
      <Example />
      <Ternary isLoggedIn={false} />
      {/*<ConditionReturn />*/}
      {/*<PackingList />*/}
      {/*<Ternary />*/}
      {/* <Logic />*/}
    </div>
  );
}

export default App;
