import React from "react";
import "./StudentProfilePage.css"; // Custom styles
function StudentProfilePage() {
  return (

    <div className="student-profile-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-initials">SA</div>
        <h3 className="profile-name">Şeyma Akkuş</h3>
        <ul className="sidebar-menu">
          <li>View public profile</li>
          <li className="active">Profile</li>
          <li>Photo</li>
          <li>Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li>Privacy</li>
          <li>Notifications</li>
          <li>API clients</li>
          <li>Close account</li>
        </ul>
      </aside>

      {/* Profile Form */}
      <main className="profile-form">
        <h1>Public Profile</h1>
        <p className="form-subtitle">Add information about yourself</p>
        <form>
          {/* Basics Section */}
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder="Şeyma" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" placeholder="Akkuş" />
          </div>
          <div className="form-group">
            <label htmlFor="headline">Headline:</label>
            <input
              type="text"
              id="headline"
              maxLength={60}
              placeholder="Add a professional headline"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">About:</label>
            <textarea
              id="description"
              placeholder="Tell us about yourself"
              rows="4"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <select id="language">
              <option>English (US)</option>
              <option>Turkish (TR)</option>
            </select>
          </div>
          {/* Submit Button */}
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}

export default StudentProfilePage;
