import React from "react";

const MyCourses = ({ courses }) => {
  return (
    <div>
      <h2>Kayıtlı Derslerim</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
