import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Merkezsiz Üniversite. Tüm hakları saklıdır.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
