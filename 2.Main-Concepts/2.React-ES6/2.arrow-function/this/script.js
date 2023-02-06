//1.With a regular function, this represents the object that called the function
/*
class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = function () {
    document.getElementById("demo").innerHTML += this;
  };
}
const myheader = new Header();
//The window object calls the function:
window.addEventListener("load", myheader.changeColor);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
*/

//2.With an arrow function, this represents the Header object no matter who called the function:

class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  };
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
