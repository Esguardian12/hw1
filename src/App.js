import logo from'./logo.svg';
import  logo2 from './Esgardo.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo2"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My name is Esgardo Castelan and I'm going to master React!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
