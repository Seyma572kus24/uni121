import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./CourseListPage.css";
import Python from "../../assets/imagess/Python.png";

const courses = [
  {
    id: 1,
    title: "Python ile Sıfırdan İleri Seviye Programlama",
    teacher: "Levent Ertunallılar",
    rating: 4.8,
    price: "199.99",
    image: Python,
  },
  {
    id: 2,
    title: "Modern Web Geliştirme Kursu",
    teacher: "Mustafa Murat Coşkun",
    rating: 4.3,
    price: "169.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Android Mobil Uygulama Kursu: Kotlin & Java",
    teacher: "Atıl Samancıoğlu",
    rating: 4.7,
    price: "149.99",
    image: "https://via.placeholder.com/150",
  },
];

function CourseListPage({ onEnroll }) {
  return (
    <>
      <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
      <div className="course-list">
        <h2>Öğretmenlerin Yüklediği Dersler</h2>
        <div className="course-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>Öğretmen: {course.teacher}</p>
              <p>Değerlendirme: ⭐ {course.rating}</p>
              <p>Fiyat: ₺{course.price}</p>
              <button onClick={() => onEnroll(course)}>Kaydol</button>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Footer'ı burada gösteriyoruz */}
    </>
  );
}

export default CourseListPage;
