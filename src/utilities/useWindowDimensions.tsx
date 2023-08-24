import { useState, useEffect } from 'react';

const TABLET_WIDTH= 600;
const DESKTOP_WIDTH = 900;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
    let view = 'desktop'
    
    if(width <= TABLET_WIDTH){
        view = 'mobile';
    } else if (width > TABLET_WIDTH && width <= DESKTOP_WIDTH){
        view = 'tablet'
    }

  return {
    width,
    height,
    view
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
