import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';
import { Link } from 'react-router-dom';
import LaLigaImg from '../images/La Liga.png';
import PremierLeagueImg from '../images/Premier League.png';
import BundesligaImg from '../images/Bundesliga.jpeg';
import SerieAImg from '../images/Serie A.png';

function LeagueSelection() {
 useCustomScripts();
 const { toggleTheme } = useContext(ThemeContext);
 const [leagues, setLeagues] = useState([
   { id: 'LA', name: 'La Liga', img: LaLigaImg, favorite: true },
   { id: 'PL', name: 'Premier League', img: PremierLeagueImg, favorite: false },
   { id: 'Bundesliga', name: 'Bundesliga', img: BundesligaImg, favorite: false },
   { id: 'SA', name: 'Serie A', img: SerieAImg, favorite: false },
 ]);

 const toggleFavorite = (id) => {
   setLeagues(leagues.map(league => league.id === id ? { ...league, favorite: !league.favorite } : league));
 };

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
             <li className="nav-item"><Link className="nav-link active" to="/league_selection">Leagues</Link></li>
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
       <div className="row">
         {leagues.map(league => (
           <div className="col-md-3" key={league.id}>
             <div className="card">
               <img src={league.img} className="card-img-top" alt={`${league.name} Logo`} />
               <div className="card-body">
                 <h5 className="card-title">{league.name}</h5>
                 <Link to="/spanish_teams" className="btn btn-primary">View Teams</Link>
                 <button
                   className={`btn btn-warning favorite-button ${league.favorite ? 'filled' : ''}`}
                   onClick={() => toggleFavorite(league.id)}
                 >
                   {league.favorite ? '★' : '☆'}
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}

export default LeagueSelection;
