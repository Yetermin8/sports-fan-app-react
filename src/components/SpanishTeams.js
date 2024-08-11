import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';
import RealMadridImg from '../images/Real Madrid.png';
import BarcelonaImg from '../images/Barcelona.jpg';
import AtleticoMadridImg from '../images/Atletico Madrid.jpg';
import { Link } from 'react-router-dom';

const teamsData = [
 { id: 'RM', name: 'Real Madrid CF', logo: RealMadridImg, favorite: true },
 { id: 'FCB', name: 'FC Barcelona', logo: BarcelonaImg, favorite: true },
 { id: 'ATM', name: 'Atlético de Madrid', logo: AtleticoMadridImg, favorite: true }
];

function SpanishTeams() {
 useCustomScripts();
 const [teams, setTeams] = useState(teamsData);
 const [searchTerm, setSearchTerm] = useState('');
 const [suggestions, setSuggestions] = useState([]);
 const { theme } = useContext(ThemeContext);

 useEffect(() => {
   setSuggestions(
     teams.filter(team =>
       team.name.toLowerCase().includes(searchTerm.toLowerCase()) && !team.favorite
     )
   );
 }, [searchTerm, teams]);

 const toggleFavorite = (teamId) => {
   setTeams(teams.map(team =>
     team.id === teamId ? { ...team, favorite: !team.favorite } : team
   ));
 };

 return (
   <div className={theme}>
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
         <button id="theme-switcher" className="btn btn-secondary">Switch Theme</button>
       </div>
       <h2>Favorite Teams</h2>
       <input
         type="text"
         id="search-bar"
         className="form-control mb-3"
         placeholder="Search and add favorite teams"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
       <div id="autocomplete-suggestions" className="autocomplete-suggestions">
         {suggestions.map(team => (
           <div
             key={team.id}
             className="autocomplete-suggestion"
             onClick={() => toggleFavorite(team.id)}
           >
             {team.name}
           </div>
         ))}
       </div>
       <div id="favorite-teams" className="row">
         {teams.filter(team => team.favorite).map(team => (
           <div key={team.id} className="col-md-3">
             <div className="card">
               <img src={team.logo} className="card-img-top" alt={team.name} />
               <div className="card-body">
                 <h5 className="card-title">{team.name}</h5>
                 <button className="btn btn-warning favorite-button" onClick={() => toggleFavorite(team.id)}>★</button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}

export default SpanishTeams;
