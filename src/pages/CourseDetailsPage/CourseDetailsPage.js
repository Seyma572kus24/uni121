import React, { useState } from "react";
import "./CourseDetailsPage.css"; // CSS dosyasını ekliyoruz

const CourseDetailsPage = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: "Giriş", watched: false },
    { id: 2, title: "React Temelleri", watched: false },
    { id: 3, title: "Komponentler", watched: false },
    { id: 4, title: "State ve Props", watched: false },
  ]);

  const [homeworks, setHomeworks] = useState([
    { id: 1, title: "Ödev 1", completed: false },
    { id: 2, title: "Ödev 2", completed: false },
  ]);

  const [notes, setNotes] = useState("");
  const [uploadedHomework, setUploadedHomework] = useState("");

  const handleWatchedToggle = (id) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, watched: !video.watched } : video
      )
    );
  };

  const handleHomeworkUpload = (id) => {
    setHomeworks((prevHomeworks) =>
      prevHomeworks.map((hw) =>
        hw.id === id ? { ...hw, completed: true } : hw
      )
    );
    setUploadedHomework("");
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const completionRate = () => {
    const totalTasks = videos.length + homeworks.length;
    const completedTasks =
      videos.filter((video) => video.watched).length +
      homeworks.filter((hw) => hw.completed).length;
    return Math.round((completedTasks / totalTasks) * 100);
  };

  return (
    <div className="course-details">
      {/* Ders Görseli ve Bilgileri */}
      <div className="course-header">
        <img
          src="https://via.placeholder.com/800x200"
          alt="Ders Görseli"
          className="course-image"
        />
        <h1 className="course-title">React Başlangıç Kursu</h1>
        <p className="course-description">
          React'i öğrenmek için kapsamlı bir giriş kursu. Bu kurs sayesinde,
          React'in temel yapı taşlarını öğreneceksiniz.
        </p>
      </div>

      {/* Tamamlanma Oranı */}
      <div className="completion-rate">
        <h2>Tamamlanma Oranı</h2>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${completionRate()}%` }}
          ></div>
        </div>
        <p>%{completionRate()}</p>
      </div>

      {/* Video Listesi */}
      <div className="section">
        <h2>Videolar</h2>
        <div className="card-list">
          {videos.map((video) => (
            <div key={video.id} className={`card ${video.watched ? "watched" : ""}`}>
              <h3>{video.title}</h3>
              <button onClick={() => handleWatchedToggle(video.id)}>
                {video.watched ? "İzlemeden Kaldır" : "İzle"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ödev Alanı */}
      <div className="section">
        <h2>Ödevler</h2>
        <div className="card-list">
          {homeworks.map((hw) => (
            <div key={hw.id} className={`card ${hw.completed ? "completed" : ""}`}>
              <h3>{hw.title}</h3>
              {hw.completed ? (
                <span className="badge">Tamamlandı</span>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleHomeworkUpload(hw.id);
                  }}
                >
                  <input
                    type="file"
                    onChange={(e) => setUploadedHomework(e.target.files[0])}
                  />
                  <button type="submit" disabled={!uploadedHomework}>
                    Gönder
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Not Alma */}
      <div className="notes-section">
        <h2>Notlar</h2>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="Bu dersle ilgili notlarınızı buraya yazın..."
        />
        <button onClick={() => alert("Notlarınız Kaydedildi!")}>Kaydet</button>
      </div>
    </div>
  );
};

export default CourseDetailsPage;

