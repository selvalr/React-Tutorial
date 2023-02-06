
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
  return (
    <div className="App">
      <ul>
      {listItems}
      </ul>
    </div>
  );
}

export default App;
