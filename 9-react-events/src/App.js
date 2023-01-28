import "./App.css";

//1.Function event
function App() {
  function normalFunction() {
    console.log("clicked normal function");
  }

  let arrowFun = () => {
    console.log("clicked arrow");
  };

  return (
    <div className="App">
      <button onClick={normalFunction}>clicked fun</button>
      <button onClick={arrowFun}>arrow</button>
    </div>
  );
}

export default App;
