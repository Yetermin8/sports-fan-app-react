import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';
import { Link } from 'react-router-dom';

function Home() {
 useCustomScripts();
 const { toggleTheme } = useContext(ThemeContext);

 return (
   <div>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Sports App</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item"><Link className="nav-link active" to="/sign_in">Sign In</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/sport_selection">Sports</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/league_selection">Leagues</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/calendar_invite">Calendar</Link></li>
           </ul>
         </div>
       </div>
     </nav>
     <div className="container mt-4">
       <div className="d-flex justify-content-end mb-3">
         <button id="increase-font" className="btn btn-secondary me-2">Increase Font Size</button>
         <button id="decrease-font" className="btn btn-secondary me-2">Decrease Font Size</button>
         <button id="theme-switcher" className="btn btn-secondary" onClick={toggleTheme}>Switch Theme</button>
       </div>
       <h1>Welcome Back!</h1>
       <form id="login-form">
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

export default Home;
