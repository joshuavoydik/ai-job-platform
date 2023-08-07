import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import JobDetail from './components/JobDetail';
import AddJob from './components/AddJob';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </Router>
  );
}

export default App;


