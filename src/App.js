import './App.css';
import StockPrice from './Components/StockPrice';

function App() {
  return (
    <div className="App flex flex-col">
      <header className="App-header flex-row">
        <h1>Stock App</h1>
      </header>
      <div className='App-body flex-col'>
          <StockPrice />
      </div>
    </div>
  );
}
export default App;