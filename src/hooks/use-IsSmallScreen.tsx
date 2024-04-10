'use client'
import { useState, useEffect } from 'react';

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' && window.innerWidth < 600);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 700);
    }

    handleResize()
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
}

export default useIsSmallScreen;