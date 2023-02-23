//Modules

//1.export

/*

Named Exports

You can create named exports two ways. In-line individually, or all at once at the bottom.

In-line individually:

person.js

export const name = "Jesse"
export const age = 40

All at once at the bottom:

person.js

const name = "Jesse"
const age = 40
export { name, age }

*/

//2.Default Exports

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};
export default message;

//3.Import
//Import from named exports
import { name, age } from "./person.js";

//Import from default exports
//Import a default export from the file message.js:

import message from "./message.js";
