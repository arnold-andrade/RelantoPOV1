import { useState } from 'react'
// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage.jsx'
import ClientPage from './ClientPage/ClientPage';
import ProjectPage from './ProjectPage/ProjectPage';
import FormPage from './FormPage/FormPage';
import ProjectDashboardPage from './ProjectDashboard/ProjectDashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client/:clientName" element={<ClientPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/client/:clientName/project/:projectName" element={<ProjectDashboardPage />} />
    </Routes>
  );
}

export default App;

