'use client'
import { useState, useEffect } from 'react';

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' && window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 800);
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