//class

//syntax:
/*

class Car {
  constructor(name) {
    this.brand = name;
  }
}

*/

//1.class

class Car {
  constructor(name) {
    this.brand = name;
  }
}
const mycar = new Car("Ford");
document.write(mycar.brand);

//2.Method in Classes

class Car1 {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand;
  }
}

const mycar1 = new Car1("Ford");
document.write(mycar1.present());

//3.Class Inheritance

class Car2 {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car2 {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const mycar2 = new Model("Ford", "Mustang");
document.write(mycar2.show());
