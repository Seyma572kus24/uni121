// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StudentProfilePage from "./pages/StudentProfilePage/StudentProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="student-profile" element={<StudentProfilePage />} /> 
      </Routes>
      
    </Router>
  );
}


export default App;
