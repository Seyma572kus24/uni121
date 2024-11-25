import React, { useState } from "react";
import "./PhotoUploadPage.css";

function PhotoUploadPage() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-upload-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-initials">SA</div>
        <h3 className="profile-name">Şeyma Akkuş</h3>
        <ul className="sidebar-menu">
          <li>View public profile</li>
          <li>Profile</li>
          <li className="active">Photo</li>
          <li>Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li>Privacy</li>
          <li>Notifications</li>
          <li>API clients</li>
          <li>Close account</li>
        </ul>
      </aside>

      {/* Photo Upload Section */}
      <main className="photo-upload-form">
        <h1>Photo</h1>
        <p>Add a nice photo of yourself for your profile.</p>
        <div className="image-preview">
          {previewImage ? (
            <img src={previewImage} alt="Preview" />
          ) : (
            <div className="placeholder">
              <span className="placeholder-icon">👤</span>
            </div>
          )}
        </div>
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            id="upload-input"
            onChange={handleImageChange}
          />
          <label htmlFor="upload-input" className="upload-button">
            Upload image
          </label>
        </div>
        <button className="save-button">Save</button>
      </main>
    </div>
  );
}

export default PhotoUploadPage;
