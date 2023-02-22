import React from "react";
import "./App.css";
import Table from "./Table";

class App extends React.Component {
  state = {
    characters: [
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
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    let filtered = characters.filter((character, i) => {
      return i !== index;
    });

    this.setState({ characters: filtered });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <h1>Table</h1>
        <Table
          removeCharacter={this.removeCharacter}
          charactersData={characters}
        />
      </div>
    );
  }
}
export default App;
