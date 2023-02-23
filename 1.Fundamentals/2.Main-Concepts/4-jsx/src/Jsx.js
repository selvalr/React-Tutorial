import React from "react";

function ExampleJsxFile() {
  var myStyle = {
    fontSize: 80,
    fontFamily: "Courier",
    color: "#004456",
  };

  let i = 5;
  return (
    <div>
      <h1 style={myStyle}>www.javatpoint.com</h1>
      <h1>JavaTpoint</h1>
      {/* This is a comment in JSX */}
      <p data-demoAttribute="demo">
        This website contains the best CS tutorials.
      </p>

      <h1>{i === 1 ? "True!" : "False!"}</h1>
    </div>
  );
}

export default ExampleJsxFile;
