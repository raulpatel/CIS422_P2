import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, redirect } from "react-router-dom";
import React from 'react';

import Home from "./pages/Home";
import ScheduleResponse from './pages/ScheduleResponse';

const API = "https://127.0.0.1:5000";

function App() {
  return (
    // navigation structure for multi-page app
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/schedule/:pollId" element={<ScheduleResponse />} />
      </Routes>
    </Router>
  );
}
export {API};
export default App;
