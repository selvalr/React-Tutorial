//Arrow Functions

/*
Before:

hello = function() {
  return "Hello World!";
}


With Arrow Function:

hello = () => {
  return "Hello World!";
}

*/

//1.Arrow Functions Return Value by Default:

hello = () => "Hello World!";

document.getElementById("demo").innerHTML = hello();

//2.Arrow Function With Parameters

hello = (val) => "Hello " + val;

document.getElementById("demo1").innerHTML = hello("World");

//3.Arrow Function Without Parentheses:

hello = (val) => "Hello " + val;

document.getElementById("demo2").innerHTML = hello("World");
