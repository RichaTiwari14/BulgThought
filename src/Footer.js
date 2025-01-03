// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { FiX } from "react-icons/fi"; // Icon for "X" (Twitter)

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Poems</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FiX />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
          <FaTwitch />
        </a>
      </div>
      <p className="footer-copyright">
        &copy; 2024 Poetry Hub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
