import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useCustomScripts() {
  const navigate = useNavigate();

  useEffect(() => {
    const form = document.getElementById('login-form');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
          navigate('/sport_selection'); // Use navigate instead of window.location.href
        } else {
          alert('Please enter both email and password.');
        }
      });
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', () => {}); // Cleanup event listener
      }
    };
  }, [navigate]);
}

export default useCustomScripts;
