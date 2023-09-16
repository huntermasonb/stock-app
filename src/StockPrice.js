import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockPrice = () => {
  const [symbols, setSymbols] = useState('');
  const [prices, setPrices] = useState({});
  const handleInputChange = (event) => {
    setSymbols(event.target.value);
    document.getElementById('stockPrices').style.display="none";
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData();
    document.getElementById('stockPrices').style.display="block";
  };
  const fetchData = async () => {
    if (symbols) {
      const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/price',
        params: {
          symbol: symbols,
          format: 'json',
          outputsize: '10'
        },
        headers: {
          'X-RapidAPI-Key': '577a69f858msh40fe029fdfb0c7bp1d982cjsna5b05d487d92',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        if (response.status == "error"){
          alert("Error: Please make sure you entered valid stock symbols.")
          return;
        }
        setPrices(response.data);
      } 
      catch (error) {
        console.error(error);
      }
    } else {
      alert("Please make sure to enter valid stock symbols.")
    }
  };
  
  // VIEW/DISPLAY
  return (
    <div className='container m-auto w-full'>     
      <div className='flex flex-row my-2'>
        <form onSubmit={handleSubmit} className='stockInput w-full text-center'>
          <input
            type="text"
            id='stockSymbols'
            value={symbols}
            className='text-center shadow-sm w-1/3 shadow-black hover:shadow-md hover:shadow-black'
            onChange={handleInputChange}
            placeholder="Enter Symbols ex. AMZN, AAPL"
            required
          />
          <button type="submit" className='rounded shadow-md px-2 mx-1 font-semibold text-purple-50 placeholder-purple-50 bg-cyan-600 hover:bg-cyan-700'>
            Search
          </button>
        </form>
      </div>
      <div id='stockPrices' className='flex flex-col'>
        <h1>Stock Prices</h1>
        <ul className='text-center'>
          {Object.keys(prices).map(symbol => (
            <li key={symbols}>
              {symbols}: {prices[symbol]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockPrice;