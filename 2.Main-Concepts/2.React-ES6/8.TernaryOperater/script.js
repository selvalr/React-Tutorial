//Ternary Operator

/*

Before:

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}


With Ternary


authenticated ? renderApp() : renderLogin();
*/

function renderApp() {
  document.getElementById("demo").innerHTML = "Welcome!";
}

function renderLogin() {
  document.getElementById("demo").innerHTML = "Please log in";
}

let authenticated = true;

authenticated ? renderApp() : renderLogin();
