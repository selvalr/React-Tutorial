import React from "react";
import "./App.css";
import Table from "./Table";

class App extends React.Component {
  render() {
    const characters = [
      {
        name: "Luke Skywalker",
        age: 18,
      },
      {
        name: "Luke Skywalker",
        age: 18,
      },
      {
        name: "Luke Skywalker",
        age: 18,
      },
      {
        name: "Luke Skywalker",
        age: 18,
      },
    ];

    return (
      <div className="App">
        <h1>Table</h1>
        <Table charactersData={characters} />
      </div>
    );
  }
}
export default App;
