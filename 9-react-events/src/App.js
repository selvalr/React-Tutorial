import "./App.css";

//1.Function event
function App() {

  function normalFunction() {
    console.log("clicked normal function");
  }

  let arrowFun = () => {
    console.log("clicked arrow");
  };

  //2.Form
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  
  //3.Passing Arguments
  const shoot = (a) => {
    alert(a);
  }

  return (
    <div className="App">
      <button onClick={normalFunction}>clicked fun</button>
      <button onClick={arrowFun}>arrow</button>


      {/*2.form*/}
      <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      </form>


      {/*3.Passing Arguments */}
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    
      
    
    </div>


  );

  
  

}



export default App;
