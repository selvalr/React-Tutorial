//state could only be used in class components,
//not in functional components.
//React Hooks,state can now
//be used both in class and functional components.

import React from "react";
import "./App.css";
import Clock from "./Calender";
import ClockTwo from "./ClockTwo";

/*
//syntax:
Class MyClass extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { attribute : "value" };
	}
}

 */

//1.Using the state Object

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 11,
      name: "selva",
    };
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h1>{this.state.id}</h1>
        <h1>{this.state.name}</h1>
        <Clock></Clock>
        <ClockTwo></ClockTwo>
      </div>
    );
  }
}

export default App;
