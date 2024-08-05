import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SportSelection from './components/SportSelection';
import LeagueSelection from './components/LeagueSelection';
import CalendarInvite from './components/CalendarInvite';
import InviteFriend from './components/InviteFriend';
import SpanishTeams from './components/SpanishTeams';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sport_selection" element={<SportSelection />} />
      <Route path="/league_selection" element={<LeagueSelection />} />
      <Route path="/calendar_invite" element={<CalendarInvite />} />
      <Route path="/invite_friend" element={<InviteFriend />} />
      <Route path="/spanish_teams" element={<SpanishTeams />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
