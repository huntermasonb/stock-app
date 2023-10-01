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
      
            'CARD' FOR DISPLAYING ALL OF THE STOCK INFORMATION -- MOBILE VIEW
        */}
        <h1>Stock Prices</h1>
        <div className="lg:flex lg:flex-col lg:justify-center">
            {/* Give the row it's number/index from the list */}
            {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="lg:flex lg:flex-row lg:justify-center">
                {row.map((symbols) => (
                //Card background 
                <div
                    key={symbols}
                    className={`${
                    rowIndex % 2 === 0 ? "even:bg-[#B6BC89] odd:bg-[#9B9BCC]" : "odd:bg-[#B6BC89] even:bg-[#9B9BCC]"
                    } shadow-sm shadow-black mx-2 mb-4 rounded-lg lg:w-1/3`}
                >   
                    {/* Symbol Column */}
                    <div className="flex flex-row text-center my-2">
                        <div className="inline-flex flex-col w-1/2 my-2">
                            <div className=" font-medium">Symbol</div>
                        </div>
                        <div className="flex-col w-1/2 inline-flex my-2">
                            <div className="uppercase font-bold">
                                {/* If symbols = price, then there was only one symbol input by user */}
                                {symbols === "price" ? symbol : symbols}
                            </div>
                        </div>
                    </div>
                    {/* Price Column */}
                    <div className="flex flex-row text-center my-2">
                        <div className="flex-col w-1/2 inline-flex my-2">
                            <div className="font-medium">Price</div>
                        </div>
                        <div className="inline-flex flex-col w-1/2 my-2">
                            <div className="font-bold">
                                {/* If price doesn't exist, then there was only one symbol input by the user, changes the way data must be referenced */}
                                {prices[symbols].price ? prices[symbols].price : prices[symbols]}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-full pb-6">Future content will go here</div>
                    </div>
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
