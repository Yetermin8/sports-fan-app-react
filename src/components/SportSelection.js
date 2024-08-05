import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';
import FutbolImg from '../images/Futbol.png';
import NBAImg from '../images/NBA.png';
import NFLImg from '../images/NFL.png';

function SportSelection() {
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
              <li className="nav-item"><a className="nav-link" href="/sign_in">Sign In</a></li>
              <li className="nav-item"><a className="nav-link active" href="/sport_selection">Sports</a></li>
              <li className="nav-item"><a className="nav-link" href="/league_selection">Leagues</a></li>
              <li className="nav-item"><a className="nav-link" href="/calendar_invite">Calendar</a></li>
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
          <div className="col-md-4">
            <div className="card">
              <img src={FutbolImg} className="card-img-top" alt="Futbol Background Image" />
              <div className="card-body">
                <h5 className="card-title image-label">Fútbol</h5>
                <a href="/league_selection" className="btn btn-primary">View Leagues</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={NBAImg} className="card-img-top" alt="National Basketball Association Background Image" />
              <div className="card-body">
                <h5 className="card-title image-label">NBA</h5>
                <a href="/league_selection" className="btn btn-primary">View Leagues</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={NFLImg} className="card-img-top" alt="National Football League Background Image" />
              <div className="card-body">
                <h5 className="card-title image-label">NFL</h5>
                <a href="/league_selection" className="btn btn-primary">View Leagues</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportSelection;
