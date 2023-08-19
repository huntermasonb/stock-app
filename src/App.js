import logo from './logo.svg';
import './App.css';
import StockPrice from './StockPrice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Old react header is below */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        <h1> Welcome to my Stock App</h1>
      </header>
      <div className='App-body'>
          <StockPrice />
      </div>
    </div>
  );
}
export default App;
