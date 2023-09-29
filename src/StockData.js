import React from "react";

const StockData = ({ symbol, prices }) => {
    return (
            <>
                {/* Stock Symbol and Prices Display.

                    Parent Div on StockPrice exists already and class id is 'stockPrices, reason for using an empty JSX parent element' 
                */}  
                
                {/* 'CARD' FOR DISPLAYING ALL OF THE STOCK INFORMATION */}
                <h1>Stock Prices</h1>
                {Object.keys(prices).map(symbols => (
                    <div key={symbols} className="flex flex-col bg-[#0d538240] mx-2 mb-4 last:mb-0">
                        <div className="flex flex-row text-center my-2">
                            <div className="flex-col w-1/2 inline-flex my-2">
                                <div className="">Symbol</div>
                            </div>
                            <div className="flex-col w-1/2 inline-flex my-2">
                                <div className=" text-[#3c1f72]">
                                    {(symbols === 'price' ? symbol : symbols)}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row text-center my-2">
                            <div className="flex-col w-1/2 inline-flex my-2">
                                <div className="">Price</div>
                            </div>
                            <div className="flex-col w-1/2 inline-flex my-2">
                                <div className=" text-[#3c1f72]">
                                    {(prices[symbols].price ? prices[symbols].price : prices[symbols])}
                                </div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-col w-full pb-6">
                                Future content will go here
                            </div>
                        </div>
                    </div>
                ))}                        
            </>
    );
};
export default StockData;