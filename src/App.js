// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StudentProfilePage from "./pages/StudentProfilePage/StudentProfilePage";
import PhotoUploadPage from "./pages/PhotoUploadPage/PhotoUploadPage";
import CourseListPage from "./pages/CourseListPage/CourseListPage";
import MyCoursesPage from "./pages/MyCoursesPage/MyCoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="student-profile" element={<StudentProfilePage />} /> 
        <Route path="student-photo" element={<PhotoUploadPage />} /> 
        <Route path="courselist" element={<CourseListPage />} /> 
        <Route path="mycourses" element={<MyCoursesPage />} /> 
        <Route path="coursedetails" element={<CourseDetailsPage />} /> 

      </Routes>
      
    </Router>
  );
}


export default App;
