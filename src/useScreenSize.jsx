// This file isn't used. I created it, but decided it would be better to just use CSS media querys. Not sure if it could be useful in the future.

import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState ({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() =>{
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };   
    }, []);
    return screenSize;
};
export default useScreenSize;