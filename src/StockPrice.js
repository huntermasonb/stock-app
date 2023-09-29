import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StockData from './StockData';

const StockPrice = () => {
  const [symbols, setSymbols] = useState('');
  const [prices, setPrices] = useState([]);
  const handleInputChange = (event) => {
    setPrices({});
    setSymbols(event.target.value);
    document.getElementById('stockPrices').style.display="none";
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData();
    document.getElementById('stockPrices').style.display="block";
  };
  
  // API Request and parameters
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
    <div className='container m-auto pt-4'>     
      <div className='flex flex-row my-2'>
        <form onSubmit={handleSubmit} className='stockInput flex-grow text-center px-2'>
          <input
            type="text"
            id='stockSymbols'
            value={symbols}
            className='text-center shadow-sm w-2/3 shadow-black hover:shadow-md hover:shadow-black'
            onChange={handleInputChange}
            placeholder="Enter Symbols ex. AMZN, AAPL"
            required
          />
          <button type="submit" 
            className='w-1/3 max-w-[250px] font-semibold rounded shadow-sm shadow-black hover:shadow-md hover:shadow-black text-purple-50 placeholder-purple-50 bg-[#0d5382] hover:bg-[#0d538296]'
          >
            Search
          </button>
        </form>
      </div>
      {/* Stock Symbol and Prices Display via StockData.js */}
      <div id='stockPrices' className='flex text-center'>
        <StockData symbol={symbols} prices={prices} />
      </div>      
    </div> 
    
  );
};
export default StockPrice;