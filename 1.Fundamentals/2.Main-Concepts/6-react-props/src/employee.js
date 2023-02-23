import React from "react";
//1.function based props

function Employee1(props) {
  const { name } = props; //Destructuring the object
  return (
    <div>
      <h1>Hello,{name}</h1>
      <h1>Id,{props.id}</h1> {/*normal selected props value */}
    </div>
  );
}

export default Employee1;

//2.class props
/*
class Employee2 extends React.Component {
  render() {
    return (
      <div>
        <p>hello,{this.props.name}</p>
        <p>iam {this.props.age}</p>
      </div>
    );
  }
}
*/

//export default Employee2;
