import "./App.css";
import Skills from "./skills";

//1.parent component
function Employee(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h1>Your Emp Id:{props.id}</h1>

      <Skills skill={["html", "css", "js"]}></Skills>
    </div>
  );
}

export default Employee;
