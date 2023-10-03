import './App.css';
import StockPrice from './Components/StockPrice';

function App() {
  return (
    <div className="App flex flex-col">
      <header className="bg-indigo-900 p-4 shadow-lg shadow-indigo-700/25 text-center">
        <a href="/" className="leading-none text-indigo-100 text-xl">Stock App</a>
      </header>

      <div className='App-body flex-col'>
          <StockPrice />
      </div>
    </div>
  );
}
export default App;