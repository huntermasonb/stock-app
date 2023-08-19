import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockPrice = () => {
  const [symbols, setSymbols] = useState('');
  const [prices, setPrices] = useState({});

  const handleInputChange = (event) => {
    setSymbols(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (symbols) {
        const options = {
          method: 'GET',
          url: 'https://twelve-data1.p.rapidapi.com/price',
          params: {
            symbol: symbols,
            format: 'json',
            outputsize: '30'
          },
          headers: {
            'X-RapidAPI-Key': '577a69f858msh40fe029fdfb0c7bp1d982cjsna5b05d487d92',
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          setPrices(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [symbols]);

  return (
    <div>
      <h1 className=' drop-shadow-md' >Stock Prices</h1>
      <div className='flex flex-row justify-center container-fluid'>
        <div className='flex-col stock-prices'>         
          <input
            type="text"
            id='stockSymbols'
            value={symbols}
            className='text-center text-purple-50 bg-purple-600 hover:bg-purple-500 rounded shadow-sm shadow-black'
            onChange={handleInputChange}
            placeholder="Enter symbols here"
          />
        </div>
      </div>
      <ul>
        {Object.keys(prices).map(symbol => (
          <li key={symbol}>
            {symbol}: {prices[symbol]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPrice;
