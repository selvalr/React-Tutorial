//1.Save data without rerender
//2.DOM Access

import "./App.css";
//import Norender from "./component/1.Norender";
import InputFocus from "./component/2.InputFoucs";
import PreviousState from "./component/3.PreviusState";

function App() {
  return (
    <div className="App">
      {/* <Norender />*/}
      {/*<InputFocus />*/}
      <PreviousState />
    </div>
  );
}

export default App;
