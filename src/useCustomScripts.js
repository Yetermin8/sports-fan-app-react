import { useEffect } from 'react';

function useCustomScripts() {
  useEffect(() => {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    let currentFontSize = 1;

    function adjustFontSize(increase) {
      currentFontSize = increase ? currentFontSize + 0.1 : currentFontSize - 0.1;
      if (currentFontSize < 0.5) currentFontSize = 0.5; 
      document.documentElement.style.fontSize = `${currentFontSize}rem`;
    }

    increaseFontButton?.addEventListener('click', () => adjustFontSize(true));
    decreaseFontButton?.addEventListener('click', () => adjustFontSize(false));

    return () => {
      increaseFontButton?.removeEventListener('click', () => adjustFontSize(true));
      decreaseFontButton?.removeEventListener('click', () => adjustFontSize(false));
    };
  }, []);
}

export default useCustomScripts;
