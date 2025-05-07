// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from "./components/UserRegister";
import TaskCreate from "./components/TaskCreate";
import TaskSuccess from "./components/TaskSuccess"; 
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/tasks/create" element={<TaskCreate />} />
        <Route path="/tasks/success" element={<TaskSuccess />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
