import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import useCustomScripts from '../useCustomScripts';

function CalendarInvite() {
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
              <li className="nav-item"><a className="nav-link" href="/sport_selection">Sports</a></li>
              <li className="nav-item"><a className="nav-link" href="/league_selection">Leagues</a></li>
              <li className="nav-item"><a className="nav-link active" href="/calendar_invite">Calendar</a></li>
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
        <h1>Upcoming Games</h1>
        <div className="list-group">
          <div className="list-group-item">
            <h5 className="mb-1">Real Madrid vs. Celta Vigo</h5>
            <p className="mb-1">Sat Oct 15, 9:00 AM</p>
            <a href="/invite_friend" className="btn btn-primary">Invite!</a>
            <a href="https://www.goal.com" className="btn btn-secondary">Where to Watch</a>
          </div>
          <div className="list-group-item">
            <h5 className="mb-1">Barcelona vs. Villarreal</h5>
            <p className="mb-1">Sun Oct 16, 11:30 AM</p>
            <a href="/invite_friend" className="btn btn-primary">Invite!</a>
            <a href="https://www.goal.com" className="btn btn-secondary">Where to Watch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarInvite;
