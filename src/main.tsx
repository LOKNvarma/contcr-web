import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ProjectDetails from "./components/ProjectDetail";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  </StrictMode>
);

