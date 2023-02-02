import { useState, useEffect } from 'react'

type Screen = {
    width: undefined | number,
    height: undefined | number
}

const useScreenSize = () => {

    const [screenSize, setScreenSize] = useState<Screen>({
      width: undefined,
      height: undefined,
    });
    
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return screenSize;
}

export default useScreenSize