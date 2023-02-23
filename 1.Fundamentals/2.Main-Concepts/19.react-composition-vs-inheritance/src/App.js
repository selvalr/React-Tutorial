import logo from './logo.svg';
import './App.css';
import WelcomeDialog from './Containment';
import App1 from './Containment2';
import WelcomeDialog1 from './Specialization';
import SignUpDialog from './Specialization1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <WelcomeDialog/>
       <App1/>
       <WelcomeDialog1/>
       <SignUpDialog/>
      </header>
    </div>
  );
}


export default App;
