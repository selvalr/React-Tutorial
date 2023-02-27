// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// props stands for properties

import "./App.css";

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h1>welcome,{props.age}</h1>
    </div>
  );
}

export default Welcome;
