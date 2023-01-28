import "./App.css";
import { Button } from "react-bootstrap";

//1.npm install react-bootstrap
//2.npm install bootstrap
//3.import style sheet bootstrap cdn in index.html
function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
