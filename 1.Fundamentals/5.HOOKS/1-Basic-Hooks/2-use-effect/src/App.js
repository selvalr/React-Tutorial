import "./App.css";
import Example from "./1.use_effect/Counter";
import Timer from "./2.use_effect/1.Timer";
import Timer1 from "./2.use_effect/2.Timer";
import Counter from "./2.use_effect/3.Cou";
import Timer3 from "./2.use_effect/4.clear";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example />
        <Timer />
        <Timer1 />
        <Counter />
        <Timer3 />
      </header>
    </div>
  );
}

export default App;
