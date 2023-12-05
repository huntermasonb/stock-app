import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailedStockData = React.memo(({ symbol }) => {
    const [details, setDetails] = useState({});

    // if (symbol.length >= 2){
    //     sortedSymbols = sortedSymbols.split(/[,\s]+/);
    //     console.log(sortedSymbols[0]); 
    // }  
    useEffect(() => {
        if (symbol) {
            setDetails({})
            const fetchData = async () => {
                const options = {
                method: 'GET',
                url: 'https://alpha-vantage.p.rapidapi.com/query',
                params: {
                    function: 'OVERVIEW',
                    symbol: symbol,
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

            fetchData();
        };
    }, [symbol]);
    return (
        <div className=" ">
            <p>{details.EPS}</p>
            <p>{details.Beta}</p>
            <p>{details.PERatio}</p>
            <p>{details.DividendYield}</p>
            <p>{details.DividendDate}</p>
            <p>{details.DividendPerShare}</p>
        </div>
    );
});
export default DetailedStockData;