import { useEffect } from 'react';

function useCustomScripts() {
  useEffect(() => {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const themeSwitcherButton = document.getElementById('theme-switcher');
    let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || 1;
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    if (currentTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }

    function adjustFontSize(increase) {
      currentFontSize = increase ? currentFontSize + 0.1 : currentFontSize - 0.1;
      if (currentFontSize < 0.5) currentFontSize = 0.5;
      document.documentElement.style.fontSize = `${currentFontSize}rem`;
      localStorage.setItem('fontSize', currentFontSize);
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
      const newTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
      localStorage.setItem('theme', newTheme);
    }

    increaseFontButton?.addEventListener('click', () => adjustFontSize(true));
    decreaseFontButton?.addEventListener('click', () => adjustFontSize(false));
    themeSwitcherButton?.addEventListener('click', toggleTheme);

    return () => {
      increaseFontButton?.removeEventListener('click', () => adjustFontSize(true));
      decreaseFontButton?.removeEventListener('click', () => adjustFontSize(false));
      themeSwitcherButton?.removeEventListener('click', toggleTheme);
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById('login-form');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
          window.location.href = '/sport_selection';
        } else {
          alert('Please enter both email and password.');
        }
      });
    }
  }, []);

  useEffect(() => {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', function () {
        this.classList.toggle('filled');
        if (this.classList.contains('filled')) {
          this.textContent = '★';
        } else {
          this.textContent = '☆';
        }
      });
    });
  }, []);
}

export default useCustomScripts;
