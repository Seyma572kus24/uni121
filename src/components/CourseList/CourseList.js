import React from "react";

const CourseList = ({ onEnroll }) => {
  const courses = [
    { id: 1, name: "React Başlangıç Kursu" },
    { id: 2, name: "JavaScript İleri Seviye" },
  ];

  return (
    <div>
      <h2>Ders Listesi</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => onEnroll(course)}>Kaydol</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
