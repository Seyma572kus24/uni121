import React from "react";
import "./MyCoursesPage.css";

function MyCoursesPage({ courses }) {
  return (
    <div className="my-courses">
      <h2>Kendi Derslerim</h2>
      {courses.length === 0 ? (
        <p>Henüz kayıtlı bir dersiniz yok.</p>
      ) : (
        <div className="course-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>Öğretmen: {course.teacher}</p>
              <p>Değerlendirme: ⭐ {course.rating}</p>
              <p>Fiyat: ₺{course.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCoursesPage;
