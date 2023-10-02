import React, { useState } from 'react';
import axios from 'axios';

import StockData from './StockData';

const StockPrice = () => {
  const [symbols, setSymbols] = useState('');
  const [sortedSymbols, setSortedSymbols] = useState('');
  const [prices, setPrices] = useState([]);

  const handleInputChange = (event) => {
    const inputSymbols = event.target.value;
    setPrices({});
    setSymbols(inputSymbols);
    
    // Sorting the symbols as the user inputs them since I couldn't figure out how to sort after the data was returned.
    const sortedSymbols = inputSymbols
    .split(',')
    .map((symbol) => symbol.trim())
    .filter((symbol) => symbol.length > 0)
    .sort()
    .join(',');

    setSortedSymbols(sortedSymbols);
    document.getElementById('stockPricesView').style.display="none";
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData();
    document.getElementById('stockPricesView').style.display="flex";
  };
  
  // API Request and parameters
  const fetchData = async () => {
    if (symbols) {
      const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/price',
        params: {
          symbol: sortedSymbols,
          format: 'json',
          outputsize: '9'
        },
        headers: {
          'X-RapidAPI-Key': '577a69f858msh40fe029fdfb0c7bp1d982cjsna5b05d487d92',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response);
        // Error Handling
        if (response.status !== 200){
          alert("Error: Please make sure you entered valid stock symbols.")
          return;
        } else if (response.status === 429 ){
          alert("Error: We have run out of API tokens temporarily, please try again later.")
          return;
        }
        // End Error Handling
        setPrices(response.data);
      } 
      catch (error) {
        console.error(error);
      }
    } else {
      alert("An error occured, please try again.")
    }
  };
  
  // VIEW/DISPLAY
  return (
    <div className='m-auto pt-4 w-full'>
      <div className='flex flex-col w-full'>     
        <div className='flex flex-row my-2'>
          <form onSubmit={handleSubmit} className='stockInput flex-grow text-center px-2'>
            <input
              type="text"
              id='stockSymbols'
              value={symbols}
              className='text-center shadow-sm w-2/3 shadow-black'
              onChange={handleInputChange}
              placeholder="Enter Symbols ex. AMZN, AAPL"
              required
            />
            <button type="submit" 
              className='w-1/3 max-w-[250px] font-semibold rounded shadow-sm shadow-black hover:shadow-md hover:shadow-black bg-indigo-300 hover:bg-indigo-400'
            >
              Search
            </button>
          </form>
        </div>
        {/* Stock Symbol and Prices Display via StockData.js */}
        <div id='stockPricesView' className='flex flex-col text-center'>
          <StockData symbol={sortedSymbols} prices={prices} />
        </div>
      </div>      
    </div> 
  );
};
export default StockPrice;