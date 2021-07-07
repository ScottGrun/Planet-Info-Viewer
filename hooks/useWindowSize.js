import React, {useEffect, useState} from 'react'

export default function useWindowSize() {
 
  const [windowDimensions, setWindowDimensions] = useState({
      width: undefined,
      height: undefined,
  });

  useEffect(() => {
      function handleResize() {
          setWindowDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }

      handleResize();
      window.addEventListener('resize', handleResize);
      return ()=> window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;

  
  }
  