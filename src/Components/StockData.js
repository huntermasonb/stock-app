import React from "react";

const StockData = ({ symbol, prices }) => {
    const itemsPerRow = 3;

    // Create an array of arrays, each containing 'itemsPerRow' items and calculate the amount of rows needed
    const rows = Array.from({ length: Math.ceil(Object.keys(prices).length / itemsPerRow) }, (_, rowIndex) =>
        Object.keys(prices).slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
    );

    return (
        <>
        {/* 
            Parent Div on StockPrice exists already and class id is 'stockPrices, reason for using an empty JSX parent element'.
      
            'CARD' FOR DISPLAYING ALL OF THE STOCK INFORMATION
        */}
        <h1 className="mt-6 text-center max-sm:font-semibold font-medium text-lg">
            {symbol.length ? 'Stock Prices' : 'Enter Symbols to Show Stock Prices'}
        </h1>
        {/* CArd Background */}
        <div className="lg:flex lg:flex-col lg:justify-center">
            {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
                {row.map((symbols) => (             
                <div
                    key={symbols}
                    className={`${
                        rowIndex % 2 === 0 ? "bg-indigo-200" : "bg-indigo-300"
                        } p-4 shadow space-y-2 duration-200 transition-all rounded-sm hover:shadow-lg`}
                >   
                    {/* Symbol Column */}
                    <div className="flex items-center justify-between">
                        <div className="font-semibold">Symbol</div>
                        <div className="uppercase ">
                            {/* If symbols = price, then there was only one symbol input by user */}
                            {symbols === "price" ? symbol : symbols}
                        </div>
                    </div>

                    {/* Price Column */}
                    <div className="flex items-center justify-between pb-4">
                        <div className="font-semibold">Price</div>
                        <div>
                            {/* If price doesn't exist, then there was only one symbol input by the user, changes the way data must be referenced */}
                            {prices[symbols].price ? prices[symbols].price : prices[symbols]}
                        </div>
                    </div>

                    <div>Price-to-Earning Ratio, Beta, & Dividend yields in the future</div>
                </div>
                ))}
            </div>
            ))}
        </div>
        {/* END DISPLAY/CARD */}
        </>
    );
};

export default StockData;
