// SignIn.js or Home.js depending on where the login form is
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import useCustomScripts from '../useCustomScripts';

function SignIn() {
  useCustomScripts();
  const { toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      navigate('/sport_selection'); // Replace with the correct path
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        {/* Navbar code here */}
      </nav>
      <div className="container mt-4">
        <div className="d-flex justify-content-end mb-3">
          <button id="increase-font" className="btn btn-secondary me-2">Increase Font Size</button>
          <button id="decrease-font" className="btn btn-secondary me-2">Decrease Font Size</button>
          <button id="theme-switcher" className="btn btn-secondary" onClick={toggleTheme}>Switch Theme</button>
        </div>
        <h1>Welcome Back!</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  );
}

export default SignIn;
