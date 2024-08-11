import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';
import { Link } from 'react-router-dom';

function InviteFriend() {
 useCustomScripts();
 const { toggleTheme } = useContext(ThemeContext);

 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Sports App</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item"><Link className="nav-link" to="/sign_in">Sign In</Link></li>
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
       <h1>Invite A Friend</h1>
       <form>
         <div className="mb-3">
           <label htmlFor="message" className="form-label">Message:</label>
           <textarea className="form-control" id="message" readOnly>Come watch Real Madrid vs Celta Vigo with me this Saturday at 9:00AM !!!</textarea>
         </div>
         <div className="mb-3">
           <label htmlFor="email" className="form-label">Email:</label>
           <input type="email" className="form-control" id="email" name="email" placeholder="email......" required />
         </div>
         <button type="submit" className="btn btn-primary">Send!</button>
       </form>
     </div>
   </div>
 );
}

export default InviteFriend;
