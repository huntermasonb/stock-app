import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailedStockData = async ({ symbol }) => {
    const sortedSymbols = symbol;
    const [details, setDetails] = useState([])
    console.log(sortedSymbols);
    
    useEffect(() => {
        if (sortedSymbols) {
            setDetails([])
            const fetchData = async () => {
                const options = {
                method: 'GET',
                url: 'https://alpha-vantage.p.rapidapi.com/query',
                params: {
                    function: 'OVERVIEW',
                    symbol: sortedSymbols,
                    datatype: 'json',
                    output_size: 'compact'
                },
                headers: {
                    'X-RapidAPI-Key': '577a69f858msh40fe029fdfb0c7bp1d982cjsna5b05d487d92',
                    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
                }
                };
                
                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                    setDetails(response.data);
                } catch (error) {
                    console.error(error);
                    return;
                }
            };
        };
    }, [sortedSymbols]);
    return (
        <div>
            <p>{details.EPS}</p>
        </div>
    );
};
export default DetailedStockData;