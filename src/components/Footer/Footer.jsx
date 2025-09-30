import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025. All rights reserved.</p>
      <ul>
        <li>
          <a href="/terms">Terms of Service</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
