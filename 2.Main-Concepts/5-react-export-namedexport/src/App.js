import "./App.css";
import Sample from "./component/Sample";
import { Sample1, Sample2, Sample3 } from "./component/Sample2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sample />
        <Sample1 />
        <Sample2 />
        <Sample3 />
      </header>
    </div>
  );
}

export default App;
